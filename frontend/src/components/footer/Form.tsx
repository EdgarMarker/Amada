import React from "react";
import { useEffect, useRef } from "react";
interface Props {
  scriptData?: string;
}
const Form = ({ scriptData }: Props) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!iframeRef.current || !scriptData) return;

    const iframe = iframeRef.current;
    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;

    if (iframeDoc) {
      iframeDoc.open();
      iframeDoc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
          </head>
          <body>
            ${scriptData}
          </body>
        </html>
      `);
      iframeDoc.close();
    }
  }, [scriptData]);

  return (
    scriptData && (

      <iframe
      ref={iframeRef}
      id="form"
      className="form"
      />
    )
  );
};

export default Form;
