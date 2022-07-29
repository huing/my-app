import Ocr from "@/src/ocr";
import Form from "@/src/form";
import Layout, { About, Contact } from "@/components/Layout";

export default [
  {
    name: "文字识别",
    path: "/ocr",
    element: <Ocr />,
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
