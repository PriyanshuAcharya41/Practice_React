const heading=React.createElement("h1",{},"Hello World From React");

const tree=React.createElement("div",{id:"Parent"},
    React.createElement("div",{id:"Child"},
        React.createElement("h1",{},"H1 tag is ready"),
    ),
);

const arr=React.createElement("div",{id:"Parents"},
    React.createElement("div",{id:"Childs"},
        [React.createElement("h1",{},"This is h1"),
        React.createElement("h2",{},"This is h2 and h1s sibling")]
    ),
    React.createElement("div2",{id:"Childs2"},
        [React.createElement("h1",{},"This is h1"),
        React.createElement("h2",{},"This is h2 and h1s sibling")]
    )
)
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(arr);

