import React, { useEffect } from "react";

const Notfound = () => {
  useEffect(() => {
    document.title = "Under construction";
  }, []);
  return (
    <>
      <div
        style={{
          padding: "10px 40px",
          backgroundColor: "#f7f7f7",
          color: "#333",
          fontSize: "16px",
          margin: "20px auto",
          maxWidth: "800px",
        }}
      >
        <h1>Under construction</h1>
        <p>The page you are looking for is under construction .</p>
        <p>
          Please check the URL you entered or use the button below to return to
          the homepage.
        </p>
        <a href="/">
          <button
            style={{
              backgroundColor: "rgb(12 101 39)",
              color: "#fff",
              border: "none",
              marginTop: "10px",
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Home
          </button>
        </a>
      </div>
    </>
  );
};

export default Notfound;
