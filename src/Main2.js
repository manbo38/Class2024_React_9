import React from "react";

// 자식 컴포넌트
const Main2 = (props) => {

    return(
        <div>
            <h3>안녕하세요? {props.name}({props.age}세)입니다.</h3>
        </div>
    );

}

export default Main2;