import { useEffect, useState } from "react";
import axios from "@/utils/axios";

function blobToBase64(blob) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

function blobToText(blob) {
  return new Promise((resolve) => {
    resolve(new Response(blob).text());
  });
}

const OcrClient = () => {
  // const [file, setFile] = useState();
  const [wordList, setWordList] = useState([]);
  const [clipList, setClipList] = useState([]);

  // const getToken = async () => {
  //   const current_token = localStorage.getItem("access_token");
  //   if (current_token) {
  //     return;
  //   }
  //   const res = await axios.post("https://aip.baidubce.com/oauth/2.0/token", {
  //     grant_type: "client_credentials",
  //     client_id: "mXFx0dzDIcUNwGLLB6ENnGut",
  //     client_secret: "PmojCnbVqwR5UuxPaXxZhRKPIA8nir9R",
  //   });
  //   const { access_token } = res || {};
  //   localStorage.setItem("access_token", access_token);
  // };

  const getBasic = async (baseUrl) => {
    // const url = await blobToBase64(file);
    const res = await axios.post(
      `https://aip.baidubce.com/rest/2.0/ocr/v1/webimage?access_token=${localStorage.getItem(
        "access_token"
      )}`,
      new URLSearchParams({ image: baseUrl }),
      { headers: { "content-type": "application/x-www-form-urlencoded" } }
    );
    // console.log(res);
    if (res && res.words_result) {
      setWordList(res.words_result);
    }
  };

  // useEffect(() => {
  //   if (file) {
  //     console.log(file);
  //     getBasic();
  //   }
  // }, [file]);

  // const handleChange = (e) => {
  //   setFile(e.target.files[0]);
  // };

  const handleClick = async () => {
    try {
      const clipboardItems = await navigator.clipboard.read();
      // console.log(clipboardItems);
      setClipList([]);
      let arr = [];
      for (const clipboardItem of clipboardItems) {
        for (const type of clipboardItem.types) {
          const blob = await clipboardItem.getType(type);
          let typeUrl;
          let typeText;
          let typeHtml;
          // 直接传true
          switch (true) {
            case /^image\/\S*$/i.test(type):
              typeUrl = await blobToBase64(blob);
              await getBasic(typeUrl);
              break;
            case /^text\/html/.test(type):
              typeHtml = await await blobToText(blob);
              break;
            case /^text\/plain/.test(type):
              typeText = await await blobToText(blob);
              break;
            default:
              typeText = await await blobToText(blob);
              break;
          }
          arr.push({ type, typeUrl, typeText, typeHtml });
        }
      }
      setClipList(arr);
    } catch (error) {
      console.log("clipboard", error);
    }
  };

  console.log(wordList);

  return (
    <div>
      {/* <input
        type={"file"}
        // value={file}
        accept="image/*"
        onChange={handleChange}
      /> */}
      <button onClick={handleClick}>点击</button>
      <div>
        {clipList.map((item) => {
          return (
            <div key={item.type}>
              <span>{item.type}:</span>
              {item.typeUrl && <img src={item.typeUrl} />}
              {item.typeText && <div>{item.typeText}</div>}
              {item.typeHtml && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.typeHtml,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
      <div>ocr识别结果</div>
      <div>{JSON.stringify(wordList)}</div>
    </div>
  );
};
export default OcrClient;
