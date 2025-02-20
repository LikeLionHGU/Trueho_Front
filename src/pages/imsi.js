import React, { useEffect, useState } from "react";
import Loading from "./Loading"; 

function SomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div>
          <h1>테스트 파일 입니다
          </h1>
        </div>
      )}
    </div>
  );
}

export default SomePage;
