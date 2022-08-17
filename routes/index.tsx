import Ocr from "@/src/ocr";
import Form from "@/src/form";
import Layout, { About, Contact } from "@/components/Layout";
import Redux from "@/src/redux";
import ReduxHook from "@/src/reduxHook";
import Flex from "@/src/flex";

export default [
  {
    name: "flex",
    path: "/flex",
    element: <Flex />,
  },
  {
    name: "文字识别",
    path: "/ocr",
    element: <Ocr />,
  },
  {
    name: "redux",
    path: "/redux",
    element: <Redux />,
  },
  {
    name: "reduxHook",
    path: "/reduxHook",
    // element: () => import("@/src/reduxHook"),
    element: <ReduxHook />,
  },
  {
    name: "form实现",
    path: "/form",
    element: <Form />,
  },
  {
    path: "/home",
    element: <Layout />,
    children: [
      {
        name: "About",
        path: "about",
        element: <About />,
      },

      {
        name: "Contact",
        path: "contact",
        element: <Contact />,
      },
    ],
  },
];
