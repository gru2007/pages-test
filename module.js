import {jsx as $ik4Y8$jsx, jsxs as $ik4Y8$jsxs, Fragment as $ik4Y8$Fragment} from "react/jsx-runtime";
import {createRoot as $ik4Y8$createRoot} from "react-dom/client";
import $ik4Y8$react, {useState as $ik4Y8$useState, useRef as $ik4Y8$useRef} from "react";
import $ik4Y8$dompurify from "dompurify";
import $ik4Y8$styledcomponents, {keyframes as $ik4Y8$keyframes, css as $ik4Y8$css, ThemeProvider as $ik4Y8$ThemeProvider, createGlobalStyle as $ik4Y8$createGlobalStyle} from "styled-components";
import {RocketIcon as $ik4Y8$RocketIcon, Cross2Icon as $ik4Y8$Cross2Icon, ExclamationTriangleIcon as $ik4Y8$ExclamationTriangleIcon, PaperPlaneIcon as $ik4Y8$PaperPlaneIcon, ReaderIcon as $ik4Y8$ReaderIcon, CodeIcon as $ik4Y8$CodeIcon, ListBulletIcon as $ik4Y8$ListBulletIcon, TextAlignLeftIcon as $ik4Y8$TextAlignLeftIcon, HeadingIcon as $ik4Y8$HeadingIcon, QuoteIcon as $ik4Y8$QuoteIcon} from "@radix-ui/react-icons";
import $ik4Y8$markdownit from "markdown-it";

//exports browser ready methods







function $0227e40e43ebbdfc$export$8d129e5b7331a32b({ question: question = "", apiKey: apiKey = "", history: history = [], conversationId: conversationId = null, apiHost: apiHost = "", onEvent: onEvent = ()=>{
    console.log("Event triggered, but no handler provided.");
} }) {
    return new Promise((resolve, reject)=>{
        const body = {
            question: question,
            history: JSON.stringify(history),
            conversation_id: conversationId,
            model: "default",
            api_key: apiKey
        };
        fetch(apiHost + "/stream", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then((response)=>{
            if (!response.body) throw Error("No response body");
            const reader = response.body.getReader();
            const decoder = new TextDecoder("utf-8");
            let counter = 0;
            const processStream = ({ done: done, value: value })=>{
                if (done) {
                    resolve();
                    return;
                }
                counter += 1;
                const chunk = decoder.decode(value);
                const lines = chunk.split("\n");
                for (let line of lines){
                    if (line.trim() == "") continue;
                    if (line.startsWith("data:")) line = line.substring(5);
                    const messageEvent = new MessageEvent("message", {
                        data: line
                    });
                    onEvent(messageEvent); // handle each message
                }
                reader.read().then(processStream).catch(reject);
            };
            reader.read().then(processStream).catch(reject);
        }).catch((error)=>{
            console.error("Connection failed:", error);
            reject(error);
        });
    });
}
const $0227e40e43ebbdfc$export$a65d69dd22caceda = (payload, apiHost)=>{
    return fetch(`${apiHost}/api/feedback`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            question: payload.question,
            answer: payload.answer,
            feedback: payload.feedback,
            api_key: payload.apikey,
            conversation_id: payload.conversation_id,
            question_index: payload.question_index
        })
    });
};




const $1778551b91611551$var$SvgLike = (props)=>/*#__PURE__*/ (0, $ik4Y8$jsxs)("svg", {
        width: 14,
        height: 14,
        viewBox: "0 0 16 16",
        fill: "current",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, $ik4Y8$jsx)("path", {
                d: "M9.4 5.9V3.1A2.1 2.1 0 0 0 7.3 1L4.5 7.3V15h7.896a1.4 1.4 0 0 0 1.4-1.19l.966-6.3a1.399 1.399 0 0 0-1.4-1.61H9.4ZM4.5 15H2.4A1.4 1.4 0 0 1 1 13.6V8.7a1.4 1.4 0 0 1 1.4-1.4h2.1",
                fill: "none"
            }),
            /*#__PURE__*/ (0, $ik4Y8$jsx)("path", {
                d: "M4.5 7.3 7.3 1a2.1 2.1 0 0 1 2.1 2.1v2.8h3.962a1.4 1.4 0 0 1 1.4 1.61l-.966 6.3a1.4 1.4 0 0 1-1.4 1.19H4.5m0-7.7V15m0-7.7H2.4A1.4 1.4 0 0 0 1 8.7v4.9A1.4 1.4 0 0 0 2.4 15h2.1",
                stroke: "current",
                strokeWidth: 1.4,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
var $1778551b91611551$export$2e2bcd8739ae039 = $1778551b91611551$var$SvgLike;




const $e5810fae2614193a$var$SvgDislike = (props)=>/*#__PURE__*/ (0, $ik4Y8$jsxs)("svg", {
        width: 14,
        height: 14,
        viewBox: "0 0 16 16",
        fill: "current",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, $ik4Y8$jsx)("path", {
                d: "M6.378 10.1v2.8a2.1 2.1 0 0 0 2.1 2.1l2.8-6.3V1H3.382a1.4 1.4 0 0 0-1.4 1.19l-.966 6.3a1.4 1.4 0 0 0 1.4 1.61h3.962Zm4.9-9.1h1.869a1.617 1.617 0 0 1 1.63 1.4v4.9a1.617 1.617 0 0 1-1.63 1.4h-1.87",
                fill: "none"
            }),
            /*#__PURE__*/ (0, $ik4Y8$jsx)("path", {
                d: "m11.278 8.7-2.8 6.3a2.1 2.1 0 0 1-2.1-2.1v-2.8H2.416a1.4 1.4 0 0 1-1.4-1.61l.966-6.3A1.4 1.4 0 0 1 3.382 1h7.896m0 7.7V1m0 7.7h1.869a1.617 1.617 0 0 0 1.63-1.4V2.4a1.617 1.617 0 0 0-1.63-1.4h-1.87",
                stroke: "current",
                strokeWidth: 1.4,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
var $e5810fae2614193a$export$2e2bcd8739ae039 = $e5810fae2614193a$var$SvgDislike;



"use client";
const $773c081b67f0ead7$var$themes = {
    dark: {
        bg: "#222327",
        text: "#fff",
        primary: {
            text: "#FAFAFA",
            bg: "#222327"
        },
        secondary: {
            text: "#A1A1AA",
            bg: "#38383b"
        }
    },
    light: {
        bg: "#fff",
        text: "#000",
        primary: {
            text: "#222327",
            bg: "#fff"
        },
        secondary: {
            text: "#A1A1AA",
            bg: "#F6F6F6"
        }
    }
};
const $773c081b67f0ead7$var$sizesConfig = {
    small: {
        size: "small",
        width: "320px",
        height: "400px"
    },
    medium: {
        size: "medium",
        width: "400px",
        height: "80vh"
    },
    large: {
        size: "large",
        width: "666px",
        height: "75vh"
    },
    getCustom: (custom)=>({
            size: "custom",
            width: custom.width,
            height: custom.height,
            maxWidth: custom.maxWidth || "968px",
            maxHeight: custom.maxHeight || "70vh"
        })
};
const $773c081b67f0ead7$var$createBox = (0, $ik4Y8$keyframes)`
   0% {
        transform: scale(0.6);
      }
      90% {
        transform: scale(1.02);
      }
      100% {
        transform: scale(1);
      }
`;
const $773c081b67f0ead7$var$closeBox = (0, $ik4Y8$keyframes)`
  0% {
        transform: scale(1); 
      }
      10% {
        transform: scale(1.02); 
      }
      100% {
        transform: scale(0.6);
      }
`;
const $773c081b67f0ead7$var$openContainer = (0, $ik4Y8$keyframes)`
      0% {
        width: 200px;
        height: 100px;
      }
      100% {
        width: ${(props)=>props.theme.dimensions.width};
        height: ${(props)=>props.theme.dimensions.height};
        border-radius: 12px;
      }`;
const $773c081b67f0ead7$var$closeContainer = (0, $ik4Y8$keyframes)`
  0% {
        width: ${(props)=>props.theme.dimensions.width};
        height: ${(props)=>props.theme.dimensions.height};
        border-radius: 12px;
      }
      100% {
        width: 200px;
        height: 100px;
      }
`;
const $773c081b67f0ead7$var$fadeIn = (0, $ik4Y8$keyframes)`
  from {
        opacity: 0;
        width: ${(props)=>props.theme.dimensions.width};
        height: ${(props)=>props.theme.dimensions.height};
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
        width: ${(props)=>props.theme.dimensions.width};
        height: ${(props)=>props.theme.dimensions.height};
      }
`;
const $773c081b67f0ead7$var$fadeOut = (0, $ik4Y8$keyframes)`
  from {
        opacity: 1;
        width: ${(props)=>props.theme.dimensions.width};
        height: ${(props)=>props.theme.dimensions.height};
      }
      to {
        opacity: 0;
        transform: scale(0.9);
        width: ${(props)=>props.theme.dimensions.width};
        height: ${(props)=>props.theme.dimensions.height};
      }
`;
const $773c081b67f0ead7$var$scaleAnimation = (0, $ik4Y8$keyframes)`
  from {
      transform: scale(1.2);
      }
      to {
      transform: scale(1);
      }
`;
const $773c081b67f0ead7$var$Overlay = (0, $ik4Y8$styledcomponents).div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  transition: opacity 0.5s;
`;
const $773c081b67f0ead7$var$WidgetContainer = (0, $ik4Y8$styledcomponents).div`
    all: initial;
    position: fixed;
    right: ${(props)=>props.modal ? "50%" : "10px"};
    bottom: ${(props)=>props.modal ? "50%" : "10px"};
    z-index: 1001;
    transform-origin:100% 100%;
    display: block;
    &.modal{
      transform : translate(50%,50%);
    }
    &.open {
        animation: css ${$773c081b67f0ead7$var$createBox} 250ms cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
    }
    &.close {
      animation: css ${$773c081b67f0ead7$var$closeBox} 250ms cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
    }
    align-items: center;
    text-align: left;
`;
const $773c081b67f0ead7$var$StyledContainer = (0, $ik4Y8$styledcomponents).div`
    all: initial;
    max-height: ${(props)=>props.theme.dimensions.maxHeight};
    max-width: ${(props)=>props.theme.dimensions.maxWidth};
    width: ${(props)=>props.theme.dimensions.width};
    height: ${(props)=>props.theme.dimensions.height} ;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    bottom: 0;
    left: 0;
    background-color: ${(props)=>props.theme.primary.bg};
    font-family: sans-serif;
    display: flex;
    border-radius: 12px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 26px 26px 0px 26px;
    animation: ${({ isOpen: isOpen, theme: theme })=>theme.dimensions.size === "large" ? isOpen ? (0, $ik4Y8$css)`${$773c081b67f0ead7$var$fadeIn} 150ms ease-in forwards` : (0, $ik4Y8$css)` ${$773c081b67f0ead7$var$fadeOut} 150ms ease-in forwards` : isOpen ? (0, $ik4Y8$css)`${$773c081b67f0ead7$var$openContainer} 150ms ease-in forwards` : (0, $ik4Y8$css)`${$773c081b67f0ead7$var$closeContainer} 250ms ease-in forwards`};
    @media only screen and (max-width: 768px) {
      max-height: 100vh;
      max-width: 80vw;
      overflow: auto;
    }
`;
const $773c081b67f0ead7$var$FloatingButton = (0, $ik4Y8$styledcomponents).div`
    position: fixed;
    display: ${(props)=>props.hidden ? "none" : "flex"};
    z-index: 500;
    justify-content: center;
    gap: 8px;
    padding: 14px;
    align-items: center;
    bottom: 16px;
    color: white;
    font-family: sans-serif;
    right: 16px;
    font-weight: 500;
    border-radius: 9999px;
    background: ${(props)=>props.bgcolor};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    animation: ${(props)=>props.isAnimatingButton ? (0, $ik4Y8$css)`${$773c081b67f0ead7$var$scaleAnimation} 200ms forwards` : "none"};
    &:hover {
      transform: scale(1.1);
      transition: transform 0.2s ease-in-out;
    }
    &:not(:hover) {
      transition: transform 0.2s ease-in-out;
    }
`;
const $773c081b67f0ead7$var$CancelButton = (0, $ik4Y8$styledcomponents).button`
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    margin: 8px;
    width: 30px;
    padding: 0;
    background-color: transparent;
    border: none;
    outline: none;
    color: inherit;
    transition: opacity 0.3s ease;
    opacity: 0.6;
    &:hover {
        opacity: 1;
    }
    .white-filter {
        filter: invert(100%);
    }
`;
const $773c081b67f0ead7$var$Header = (0, $ik4Y8$styledcomponents).div`
    display: flex;
    align-items: flex-start;
`;
const $773c081b67f0ead7$var$ContentWrapper = (0, $ik4Y8$styledcomponents).div`
    display: flex;
    flex-direction: column;
    gap:2px; 
    margin-left: 8px;
`;
const $773c081b67f0ead7$var$Title = (0, $ik4Y8$styledcomponents).h3`
    font-size: 14px;
    font-weight: normal;
    color: ${(props)=>props.theme.primary.text};
    margin: 0;
`;
const $773c081b67f0ead7$var$Description = (0, $ik4Y8$styledcomponents).p`
    font-size: 13.75px;
    color: ${(props)=>props.theme.secondary.text};
    margin: 0 ;
    padding: 0 ;
`;
const $773c081b67f0ead7$var$Conversation = (0, $ik4Y8$styledcomponents).div`
  height: 70%;
  border-radius: 6px;
  text-align: left;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: ${(props)=>props.theme.secondary.bg} transparent; /* thumb color track color */
`;
const $773c081b67f0ead7$var$Feedback = (0, $ik4Y8$styledcomponents).div`
  background-color: transparent;
  font-weight: normal;
  gap: 12px;
  display: flex;
  padding: 6px;
  clear: both;
`;
const $773c081b67f0ead7$var$MessageBubble = (0, $ik4Y8$styledcomponents).div`
    display: block;
    font-size: 16px;
    position: relative;
    width: 100%;;
    float: right;
    margin: 0px;
    &:hover ${$773c081b67f0ead7$var$Feedback} * {
    visibility: visible ;
  }
`;
const $773c081b67f0ead7$var$Message = (0, $ik4Y8$styledcomponents).div`
    background: ${(props)=>props.type === "QUESTION" ? "linear-gradient(to bottom right, #8860DB, #6D42C5)" : props.theme.secondary.bg};
    color: ${(props)=>props.type === "ANSWER" ? props.theme.primary.text : "#fff"};
    border: none;
    float: ${(props)=>props.type === "QUESTION" ? "right" : "left"};
    max-width: ${(props)=>props.type === "ANSWER" ? "100%" : "80"};
    overflow: auto;
    margin: 4px;
    display: block;
    line-height: 1.5;
    padding: 12px;
    border-radius: 6px;
`;
const $773c081b67f0ead7$var$Markdown = (0, $ik4Y8$styledcomponents).div`
 pre {
      padding: 8px;
      width: 90%;
      font-size: 12px;
      border-radius: 6px;
      overflow-x: auto;
      background-color: #1B1C1F;
      color: #fff ;
    }

    h1 {
      font-size: 16px;
    }

    h2 {
      font-size: 14px;
    }

    h3 {
      font-size: 14px;
    }

    p {
      margin: 0px;
    }

    code:not(pre code) {
      border-radius: 6px;
      padding: 1px 3px;
      font-size: 12px;
      display: inline-block;
      background-color: #646464;
      color: #fff ;
    }

    code {
      white-space: pre-wrap ;
      overflow-wrap: break-word;
      word-break: break-all;
    }

    ul{
      padding:0px;
      list-style-position: inside;
    }
`;
const $773c081b67f0ead7$var$ErrorAlert = (0, $ik4Y8$styledcomponents).div`
  color: #b91c1c;
  border:0.1px solid #b91c1c;
  display: flex;
  padding:4px;
  margin:11.2px;
  opacity: 90%;
  max-width: 70%;
  font-weight: 400;
  border-radius: 6px;
  justify-content: space-evenly;
`;
//dot loading animation
const $773c081b67f0ead7$var$dotBounce = (0, $ik4Y8$keyframes)`
  0%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-5px);
  }
`;
const $773c081b67f0ead7$var$DotAnimation = (0, $ik4Y8$styledcomponents).div`
  display: inline-block;
  animation: ${$773c081b67f0ead7$var$dotBounce} 1s infinite ease-in-out;
`;
// delay classes as styled components
const $773c081b67f0ead7$var$Delay = (0, $ik4Y8$styledcomponents)($773c081b67f0ead7$var$DotAnimation)`
  animation-delay: ${(props)=>props.delay + "ms"};
`;
const $773c081b67f0ead7$var$PromptContainer = (0, $ik4Y8$styledcomponents).form`
  background-color: transparent;
  height: ${(props)=>props.theme.dimensions.size == "large" ? "60px" : "40px"};
  display: flex;
  justify-content: space-evenly;
`;
const $773c081b67f0ead7$var$StyledInput = (0, $ik4Y8$styledcomponents).input`
  width: 100%;
  border: 1px solid #686877;
  padding-left: 12px;
  background-color: transparent;
  font-size: 16px;
  border-radius: 6px;
  color: ${(props)=>props.theme.text};
  outline: none;
`;
const $773c081b67f0ead7$var$StyledButton = (0, $ik4Y8$styledcomponents).button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom right, #5AF0EC, #E80D9D);
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  min-width: ${(props)=>props.theme.dimensions.size === "large" ? "60px" : "40px"};
  height: ${(props)=>props.theme.dimensions.size === "large" ? "60px" : "40px"};
  margin-left:8px;
  padding: 0px;
  
  border: none;
  cursor: pointer;
  outline: none;
  &:hover{
    opacity: 90%;
  }
  &:disabled {
    background-image: linear-gradient(to bottom right, #2d938f, #b31877);
  }`;
const $773c081b67f0ead7$var$HeroContainer = (0, $ik4Y8$styledcomponents).div`
  position: relative;
  width: 90%;
  max-width: 500px;
  background-image: linear-gradient(to bottom right, #5AF0EC, #ff1bf4);
  border-radius: 10px;
  margin: 16px auto;
  padding: 2px;
`;
const $773c081b67f0ead7$var$HeroWrapper = (0, $ik4Y8$styledcomponents).div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
  align-items: middle;
  background-color: ${(props)=>props.theme.primary.bg};
  border-radius: 10px; 
  font-weight: normal;
  padding: 12px;
`;
const $773c081b67f0ead7$var$HeroTitle = (0, $ik4Y8$styledcomponents).h3`
  color: ${(props)=>props.theme.text};
  font-size: 16px;
  margin:0px ;
  padding: 0px;
`;
const $773c081b67f0ead7$var$HeroDescription = (0, $ik4Y8$styledcomponents).p`
  color: ${(props)=>props.theme.text};
  font-size: 12px;
  line-height: 1.5;
  margin: 0px;
  padding: 0px;
`;
const $773c081b67f0ead7$var$Hyperlink = (0, $ik4Y8$styledcomponents).a`
  color: #9971EC;
  text-decoration: none;
`;
const $773c081b67f0ead7$var$Tagline = (0, $ik4Y8$styledcomponents).div`
  text-align: center;
  display: block;
  color: ${(props)=>props.theme.secondary.text};
  padding: 12px ;
  font-size: 12px;
`;
const $773c081b67f0ead7$var$SourcesList = (0, $ik4Y8$styledcomponents).div`
  display: flex;
  margin:12px 0px;
  flex-wrap: wrap;
  gap: 8px;
`;
const $773c081b67f0ead7$var$SourceLink = (0, $ik4Y8$styledcomponents).a`
  color: ${(props)=>props.theme.primary.text};
  text-decoration: none;
  background: ${(props)=>props.theme.secondary.bg};
  padding: 4px 12px;
  border-radius: 85px;
  font-size: 14px;
  transition: opacity 0.2s ease;
  display: inline-block;
  text-align: center;
  max-width: 25%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  
  &:hover {
    opacity: 0.8;
  }
`;
const $773c081b67f0ead7$var$ExtraButton = (0, $ik4Y8$styledcomponents).button`
  color: #9971EC;
  background: transparent;
  border-radius: 85px;
  padding: 4px 12px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease;
  text-align: center;
  height:auto;
  &:hover {
    opacity: 0.8;
  }
`;
const $773c081b67f0ead7$var$SourcesComponent = ({ sources: sources })=>{
    const [showAll, setShowAll] = (0, $ik4Y8$react).useState(false);
    const visibleSources = showAll ? sources : sources.slice(0, 3);
    const extraCount = sources.length - 3;
    return /*#__PURE__*/ (0, $ik4Y8$jsxs)($773c081b67f0ead7$var$SourcesList, {
        children: [
            visibleSources.map((source, idx)=>/*#__PURE__*/ (0, $ik4Y8$jsx)($773c081b67f0ead7$var$SourceLink, {
                    href: source.source,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    title: source.title,
                    children: source.title
                }, idx)),
            sources.length > 3 && /*#__PURE__*/ (0, $ik4Y8$jsx)($773c081b67f0ead7$var$ExtraButton, {
                onClick: ()=>setShowAll(!showAll),
                children: showAll ? "Show less" : `+ ${extraCount} more`
            })
        ]
    });
};
const $773c081b67f0ead7$var$Hero = ({ title: title, description: description, theme: theme })=>{
    return /*#__PURE__*/ (0, $ik4Y8$jsx)($773c081b67f0ead7$var$HeroContainer, {
        children: /*#__PURE__*/ (0, $ik4Y8$jsxs)($773c081b67f0ead7$var$HeroWrapper, {
            children: [
                /*#__PURE__*/ (0, $ik4Y8$jsx)((0, $ik4Y8$RocketIcon), {
                    color: theme === "light" ? "black" : "white",
                    width: 24,
                    height: 24
                }),
                /*#__PURE__*/ (0, $ik4Y8$jsx)($773c081b67f0ead7$var$HeroTitle, {
                    children: title
                }),
                /*#__PURE__*/ (0, $ik4Y8$jsx)($773c081b67f0ead7$var$HeroDescription, {
                    children: description
                })
            ]
        })
    });
};
const $773c081b67f0ead7$export$8d70f1ccc5dab46b = (props)=>{
    const { buttonIcon: buttonIcon = "https://d3dg1063dc54p9.cloudfront.net/widget/chat.svg", buttonText: buttonText = "Ask a question", buttonBg: buttonBg = "linear-gradient(to bottom right, #5AF0EC, #E80D9D)", defaultOpen: defaultOpen = false, ...coreProps } = props;
    const [open, setOpen] = (0, $ik4Y8$react).useState(defaultOpen);
    const [isAnimatingButton, setIsAnimatingButton] = (0, $ik4Y8$react).useState(false);
    const [isFloatingButtonVisible, setIsFloatingButtonVisible] = (0, $ik4Y8$react).useState(true);
    (0, $ik4Y8$react).useEffect(()=>{
        if (isFloatingButtonVisible) setTimeout(()=>setIsAnimatingButton(true), 250);
        return ()=>{
            setIsAnimatingButton(false);
        };
    }, [
        isFloatingButtonVisible
    ]);
    const handleClose = ()=>{
        setIsFloatingButtonVisible(true);
        setOpen(false);
    };
    const handleOpen = ()=>{
        setOpen(true);
        setIsFloatingButtonVisible(false);
    };
    return /*#__PURE__*/ (0, $ik4Y8$jsxs)((0, $ik4Y8$Fragment), {
        children: [
            /*#__PURE__*/ (0, $ik4Y8$jsxs)($773c081b67f0ead7$var$FloatingButton, {
                bgcolor: buttonBg,
                onClick: handleOpen,
                hidden: !isFloatingButtonVisible,
                isAnimatingButton: isAnimatingButton,
                children: [
                    /*#__PURE__*/ (0, $ik4Y8$jsx)("img", {
                        width: 24,
                        src: buttonIcon
                    }),
                    /*#__PURE__*/ (0, $ik4Y8$jsx)("span", {
                        children: buttonText
                    })
                ]
            }),
            /*#__PURE__*/ (0, $ik4Y8$jsx)($773c081b67f0ead7$export$2b086ff69f92acd2, {
                isOpen: open,
                handleClose: handleClose,
                ...coreProps
            })
        ]
    });
};
const $773c081b67f0ead7$export$2b086ff69f92acd2 = ({ apiHost: apiHost = "https://gptcloud.arc53.com", apiKey: apiKey = "82962c9a-aa77-4152-94e5-a4f84fd44c6a", avatar: avatar = "https://d3dg1063dc54p9.cloudfront.net/cute-docsgpt.png", title: title = "Get AI assistance", description: description = "DocsGPT's AI Chatbot is here to help", heroTitle: heroTitle = "Welcome to DocsGPT !", heroDescription: heroDescription = "This chatbot is built with DocsGPT and utilises GenAI, please review important information using sources.", size: size = "small", theme: theme = "dark", collectFeedback: collectFeedback = true, isOpen: isOpen = false, showSources: showSources = true, handleClose: handleClose, prefilledQuery: prefilledQuery = "" })=>{
    const [prompt, setPrompt] = (0, $ik4Y8$react).useState("");
    const [mounted, setMounted] = (0, $ik4Y8$react).useState(false);
    const [status, setStatus] = (0, $ik4Y8$react).useState("idle");
    const [queries, setQueries] = (0, $ik4Y8$react).useState([]);
    const [conversationId, setConversationId] = (0, $ik4Y8$react).useState(null);
    const [eventInterrupt, setEventInterrupt] = (0, $ik4Y8$react).useState(false); //click or scroll by user while autoScrolling
    const [hasScrolledToLast, setHasScrolledToLast] = (0, $ik4Y8$useState)(true);
    const isBubbleHovered = (0, $ik4Y8$useRef)(false);
    const conversationRef = (0, $ik4Y8$useRef)(null);
    const endMessageRef = (0, $ik4Y8$react).useRef(null);
    const md = new (0, $ik4Y8$markdownit)();
    (0, $ik4Y8$react).useEffect(()=>{
        if (isOpen) {
            setMounted(true); // Mount the component
            appendQuery(prefilledQuery);
        } else {
            // Wait for animations before unmounting
            const timeout = setTimeout(()=>{
                setMounted(false);
            }, 250);
            return ()=>clearTimeout(timeout);
        }
    }, [
        isOpen
    ]);
    const handleUserInterrupt = ()=>{
        if (!eventInterrupt && status === "loading") setEventInterrupt(true);
    };
    const scrollIntoView = ()=>{
        if (!conversationRef?.current || eventInterrupt) return;
        if (status === "idle" || !queries.length || !queries[queries.length - 1].response) conversationRef.current.scrollTo({
            behavior: "smooth",
            top: conversationRef.current.scrollHeight
        });
        else conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
        setHasScrolledToLast(true);
    };
    const checkScroll = ()=>{
        const el = conversationRef.current;
        if (!el) return;
        const isBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 10;
        setHasScrolledToLast(isBottom);
    };
    (0, $ik4Y8$react).useEffect(()=>{
        !eventInterrupt && scrollIntoView();
        conversationRef.current?.addEventListener("scroll", checkScroll);
        return ()=>{
            conversationRef.current?.removeEventListener("scroll", checkScroll);
        };
    }, [
        queries.length,
        queries[queries.length - 1]?.response
    ]);
    async function handleFeedback(feedback, index) {
        let query = queries[index];
        if (!query.response || !conversationId) {
            console.log("Cannot submit feedback: missing response or conversation ID");
            return;
        }
        // If clicking the same feedback button that's already active, remove the feedback by sending null
        if (query.feedback === feedback) {
            try {
                const response = await (0, $0227e40e43ebbdfc$export$a65d69dd22caceda)({
                    question: query.prompt,
                    answer: query.response,
                    feedback: null,
                    apikey: apiKey,
                    conversation_id: conversationId,
                    question_index: index
                }, apiHost);
                if (response.status === 200) {
                    const updatedQuery = {
                        ...query
                    };
                    delete updatedQuery.feedback;
                    setQueries((prev)=>prev.map((q, i)=>i === index ? updatedQuery : q));
                }
            } catch (err) {
                console.error("Failed to submit feedback:", err);
            }
            return;
        }
        try {
            const response = await (0, $0227e40e43ebbdfc$export$a65d69dd22caceda)({
                question: query.prompt,
                answer: query.response,
                feedback: feedback,
                apikey: apiKey,
                conversation_id: conversationId,
                question_index: index
            }, apiHost);
            if (response.status === 200) setQueries((prev)=>{
                return prev.map((q, i)=>{
                    if (i === index) return {
                        ...q,
                        feedback: feedback
                    };
                    return q;
                });
            });
        } catch (err) {
            console.error("Failed to submit feedback:", err);
        }
    }
    async function stream(question) {
        setStatus("loading");
        try {
            await (0, $0227e40e43ebbdfc$export$8d129e5b7331a32b)({
                question: question,
                apiKey: apiKey,
                apiHost: apiHost,
                history: queries,
                conversationId: conversationId,
                onEvent: (event)=>{
                    const data = JSON.parse(event.data);
                    // check if the 'end' event has been received
                    if (data.type === "end") setStatus("idle");
                    else if (data.type === "id") setConversationId(data.id);
                    else if (data.type === "error") {
                        const updatedQueries = [
                            ...queries
                        ];
                        updatedQueries[updatedQueries.length - 1].error = data.error;
                        setQueries(updatedQueries);
                        setStatus("idle");
                    } else if (data.type === "source" && showSources) {
                        const updatedQueries = [
                            ...queries
                        ];
                        updatedQueries[updatedQueries.length - 1].sources = data.source;
                        setQueries(updatedQueries);
                    } else {
                        const result = data.answer ? data.answer : ""; //Fallback to an empty string if data.answer is undefined
                        const streamingResponse = queries[queries.length - 1].response ? queries[queries.length - 1].response : "";
                        const updatedQueries = [
                            ...queries
                        ];
                        updatedQueries[updatedQueries.length - 1].response = streamingResponse + result;
                        setQueries(updatedQueries);
                    }
                }
            });
        } catch (error) {
            const updatedQueries = [
                ...queries
            ];
            updatedQueries[updatedQueries.length - 1].error = "Something went wrong !";
            setQueries(updatedQueries);
            setStatus("idle");
        //setEventInterrupt(false)
        }
    }
    // submit handler
    const handleSubmit = async (e)=>{
        e.preventDefault();
        await appendQuery(prompt);
    };
    const appendQuery = async (userQuery)=>{
        if (!userQuery) return;
        setEventInterrupt(false);
        queries.push({
            prompt: userQuery
        });
        setPrompt("");
        await stream(userQuery);
    };
    const handleImageError = (event)=>{
        event.currentTarget.src = "https://d3dg1063dc54p9.cloudfront.net/cute-docsgpt.png";
    };
    const dimensions = typeof size === "object" && "custom" in size ? $773c081b67f0ead7$var$sizesConfig.getCustom(size.custom) : $773c081b67f0ead7$var$sizesConfig[size];
    if (!mounted) return null;
    return /*#__PURE__*/ (0, $ik4Y8$jsxs)((0, $ik4Y8$ThemeProvider), {
        theme: {
            ...$773c081b67f0ead7$var$themes[theme],
            dimensions: dimensions
        },
        children: [
            isOpen && size === "large" && /*#__PURE__*/ (0, $ik4Y8$jsx)($773c081b67f0ead7$var$Overlay, {
                onClick: handleClose
            }),
            /*#__PURE__*/ (0, $ik4Y8$jsx)($773c081b67f0ead7$var$WidgetContainer, {
                className: `${size !== "large" ? isOpen ? "open" : "close" : "modal"}`,
                modal: size === "large",
                children: /*#__PURE__*/ (0, $ik4Y8$jsxs)($773c081b67f0ead7$var$StyledContainer, {
                    isOpen: isOpen,
                    children: [
                        /*#__PURE__*/ (0, $ik4Y8$jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0, $ik4Y8$jsx)($773c081b67f0ead7$var$CancelButton, {
                                    onClick: handleClose,
                                    children: /*#__PURE__*/ (0, $ik4Y8$jsx)((0, $ik4Y8$Cross2Icon), {
                                        width: 24,
                                        height: 24,
                                        color: theme === "light" ? "black" : "white"
                                    })
                                }),
                                /*#__PURE__*/ (0, $ik4Y8$jsxs)($773c081b67f0ead7$var$Header, {
                                    children: [
                                        /*#__PURE__*/ (0, $ik4Y8$jsx)("img", {
                                            style: {
                                                transform: "translateY(-5px)",
                                                maxWidth: "42px",
                                                maxHeight: "42px"
                                            },
                                            onError: handleImageError,
                                            src: avatar,
                                            alt: "docs-gpt"
                                        }),
                                        /*#__PURE__*/ (0, $ik4Y8$jsxs)($773c081b67f0ead7$var$ContentWrapper, {
                                            children: [
                                                /*#__PURE__*/ (0, $ik4Y8$jsx)($773c081b67f0ead7$var$Title, {
                                                    children: title
                                                }),
                                                /*#__PURE__*/ (0, $ik4Y8$jsx)($773c081b67f0ead7$var$Description, {
                                                    children: description
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $ik4Y8$jsx)($773c081b67f0ead7$var$Conversation, {
                            ref: conversationRef,
                            onWheel: handleUserInterrupt,
                            onTouchMove: handleUserInterrupt,
                            children: queries.length > 0 ? queries?.map((query, index)=>{
                                return /*#__PURE__*/ (0, $ik4Y8$jsxs)((0, $ik4Y8$react).Fragment, {
                                    children: [
                                        query.prompt && /*#__PURE__*/ (0, $ik4Y8$jsx)($773c081b67f0ead7$var$MessageBubble, {
                                            type: "QUESTION",
                                            children: /*#__PURE__*/ (0, $ik4Y8$jsx)($773c081b67f0ead7$var$Message, {
                                                type: "QUESTION",
                                                ref: !(query.response || query.error) && index === queries.length - 1 ? endMessageRef : null,
                                                children: query.prompt
                                            })
                                        }),
                                        query.response ? /*#__PURE__*/ (0, $ik4Y8$jsxs)($773c081b67f0ead7$var$MessageBubble, {
                                            onMouseOver: ()=>{
                                                isBubbleHovered.current = true;
                                            },
                                            type: "ANSWER",
                                            children: [
                                                showSources && query.sources && query.sources.length > 0 && query.sources.some((source)=>source.source !== "local") && /*#__PURE__*/ (0, $ik4Y8$jsx)($773c081b67f0ead7$var$SourcesComponent, {
                                                    sources: query.sources.filter((source)=>source.source !== "local")
                                                }),
                                                /*#__PURE__*/ (0, $ik4Y8$jsx)($773c081b67f0ead7$var$Message, {
                                                    type: "ANSWER",
                                                    ref: index === queries.length - 1 ? endMessageRef : null,
                                                    children: /*#__PURE__*/ (0, $ik4Y8$jsx)($773c081b67f0ead7$var$Markdown, {
                                                        dangerouslySetInnerHTML: {
                                                            __html: (0, $ik4Y8$dompurify).sanitize(md.render(query.response))
                                                        }
                                                    })
                                                }),
                                                collectFeedback && /*#__PURE__*/ (0, $ik4Y8$jsxs)($773c081b67f0ead7$var$Feedback, {
                                                    children: [
                                                        /*#__PURE__*/ (0, $ik4Y8$jsx)("button", {
                                                            style: {
                                                                backgroundColor: "transparent",
                                                                border: "none",
                                                                cursor: "pointer"
                                                            },
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                handleFeedback("LIKE", index);
                                                            },
                                                            children: /*#__PURE__*/ (0, $ik4Y8$jsx)((0, $1778551b91611551$export$2e2bcd8739ae039), {
                                                                style: {
                                                                    stroke: query.feedback == "LIKE" ? "#8860DB" : "#c0c0c0",
                                                                    visibility: query.feedback == "LIKE" ? "visible" : "hidden"
                                                                },
                                                                fill: "none"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0, $ik4Y8$jsx)("button", {
                                                            style: {
                                                                backgroundColor: "transparent",
                                                                border: "none",
                                                                cursor: "pointer"
                                                            },
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                handleFeedback("DISLIKE", index);
                                                            },
                                                            children: /*#__PURE__*/ (0, $ik4Y8$jsx)((0, $e5810fae2614193a$export$2e2bcd8739ae039), {
                                                                style: {
                                                                    stroke: query.feedback == "DISLIKE" ? "#ed8085" : "#c0c0c0",
                                                                    visibility: query.feedback == "DISLIKE" ? "visible" : "hidden"
                                                                },
                                                                fill: "none"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }) : /*#__PURE__*/ (0, $ik4Y8$jsx)("div", {
                                            children: query.error ? /*#__PURE__*/ (0, $ik4Y8$jsxs)($773c081b67f0ead7$var$ErrorAlert, {
                                                children: [
                                                    /*#__PURE__*/ (0, $ik4Y8$jsx)((0, $ik4Y8$ExclamationTriangleIcon), {
                                                        width: 22,
                                                        height: 22,
                                                        color: "#b91c1c"
                                                    }),
                                                    /*#__PURE__*/ (0, $ik4Y8$jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, $ik4Y8$jsx)("h5", {
                                                                style: {
                                                                    margin: 2
                                                                },
                                                                children: "Network Error"
                                                            }),
                                                            /*#__PURE__*/ (0, $ik4Y8$jsx)("span", {
                                                                style: {
                                                                    margin: 2,
                                                                    fontSize: "13px"
                                                                },
                                                                children: query.error
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }) : /*#__PURE__*/ (0, $ik4Y8$jsx)($773c081b67f0ead7$var$MessageBubble, {
                                                type: "ANSWER",
                                                children: /*#__PURE__*/ (0, $ik4Y8$jsxs)($773c081b67f0ead7$var$Message, {
                                                    type: "ANSWER",
                                                    style: {
                                                        fontWeight: 600
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, $ik4Y8$jsx)($773c081b67f0ead7$var$DotAnimation, {
                                                            children: "."
                                                        }),
                                                        /*#__PURE__*/ (0, $ik4Y8$jsx)($773c081b67f0ead7$var$Delay, {
                                                            delay: 200,
                                                            children: "."
                                                        }),
                                                        /*#__PURE__*/ (0, $ik4Y8$jsx)($773c081b67f0ead7$var$Delay, {
                                                            delay: 400,
                                                            children: "."
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                }, index);
                            }) : /*#__PURE__*/ (0, $ik4Y8$jsx)($773c081b67f0ead7$var$Hero, {
                                title: heroTitle,
                                description: heroDescription,
                                theme: theme
                            })
                        }),
                        /*#__PURE__*/ (0, $ik4Y8$jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0, $ik4Y8$jsxs)($773c081b67f0ead7$var$PromptContainer, {
                                    onSubmit: handleSubmit,
                                    children: [
                                        /*#__PURE__*/ (0, $ik4Y8$jsx)($773c081b67f0ead7$var$StyledInput, {
                                            autoFocus: true,
                                            value: prompt,
                                            onChange: (event)=>setPrompt(event.target.value),
                                            type: "text",
                                            placeholder: "Ask your question"
                                        }),
                                        /*#__PURE__*/ (0, $ik4Y8$jsx)($773c081b67f0ead7$var$StyledButton, {
                                            disabled: prompt.trim().length == 0 || status !== "idle",
                                            children: /*#__PURE__*/ (0, $ik4Y8$jsx)((0, $ik4Y8$PaperPlaneIcon), {
                                                width: 18,
                                                height: 18,
                                                color: "white"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, $ik4Y8$jsxs)($773c081b67f0ead7$var$Tagline, {
                                    children: [
                                        "Powered by\xa0",
                                        /*#__PURE__*/ (0, $ik4Y8$jsx)($773c081b67f0ead7$var$Hyperlink, {
                                            target: "_blank",
                                            href: "https://www.docsgpt.cloud/",
                                            children: "DocsGPT"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};






async function $c8bac80611553cdc$export$cfcc0908d6dfb8a6(question, apiKey, apiHost, signal) {
    const payload = {
        question: question,
        api_key: apiKey
    };
    try {
        const response = await fetch(`${apiHost}/api/search`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload),
            signal: signal
        });
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        if (!(error instanceof DOMException && error.name == "AbortError")) console.error("Failed to fetch documents:", error);
        throw error;
    }
}


const $17f599bc115b22f1$export$34ee789f81ad4cb9 = ()=>{
    const platform = window.navigator.platform;
    const userAgent = window.navigator.userAgent || window.navigator.vendor;
    if (/Mac/i.test(platform)) return "mac";
    if (/Win/i.test(platform)) return "win";
    if (/Linux/i.test(platform) && !/Android/i.test(userAgent)) return "linux";
    if (/Android/i.test(userAgent)) return "android";
    if (/iPhone|iPad|iPod/i.test(userAgent)) return "ios";
    return "other";
};
const $17f599bc115b22f1$export$7f7dcc6594596059 = (markdown, keyword)=>{
    const lines = markdown.trim().split("\n");
    const keywordLower = keyword?.toLowerCase();
    const escapeRegExp = (str)=>str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    const escapedKeyword = keyword ? escapeRegExp(keyword) : "";
    const keywordRegex = keyword ? new RegExp(`(${escapedKeyword})`, "gi") : null;
    let isInCodeBlock = false;
    let codeBlockContent = [];
    let matchingLines = [];
    let firstLine = null;
    for(let i = 0; i < lines.length; i++){
        const trimmedLine = lines[i].trim();
        if (!trimmedLine) continue;
        if (trimmedLine.startsWith("```")) {
            if (!isInCodeBlock) {
                isInCodeBlock = true;
                codeBlockContent = [];
            } else {
                isInCodeBlock = false;
                const codeContent = codeBlockContent.join("\n");
                const parsedElement = {
                    content: codeContent,
                    tag: "code"
                };
                if (!firstLine) firstLine = parsedElement;
                if (keywordLower && codeContent.toLowerCase().includes(keywordLower)) {
                    parsedElement.content = parsedElement.content.replace(keywordRegex, '<span class="highlight">$1</span>');
                    matchingLines.push(parsedElement);
                }
            }
            continue;
        }
        if (isInCodeBlock) {
            codeBlockContent.push(trimmedLine);
            continue;
        }
        let parsedElement = null;
        const headingMatch = trimmedLine.match(/^(#{1,6})\s+(.+)$/);
        const bulletMatch = trimmedLine.match(/^[-*]\s+(.+)$/);
        const numberedMatch = trimmedLine.match(/^\d+\.\s+(.+)$/);
        const blockquoteMatch = trimmedLine.match(/^>+\s*(.+)$/);
        let content = trimmedLine;
        if (headingMatch) {
            content = headingMatch[2];
            parsedElement = {
                content: content,
                tag: "heading"
            };
        } else if (bulletMatch) {
            content = bulletMatch[1];
            parsedElement = {
                content: content,
                tag: "bulletList"
            };
        } else if (numberedMatch) {
            content = numberedMatch[1];
            parsedElement = {
                content: content,
                tag: "numberedList"
            };
        } else if (blockquoteMatch) {
            content = blockquoteMatch[1];
            parsedElement = {
                content: content,
                tag: "blockquote"
            };
        } else parsedElement = {
            content: content,
            tag: "text"
        };
        if (!firstLine) firstLine = parsedElement;
        if (keywordLower && parsedElement.content.toLowerCase().includes(keywordLower)) {
            parsedElement.content = parsedElement.content.replace(keywordRegex, '<span class="highlight">$1</span>');
            matchingLines.push(parsedElement);
        }
    }
    if (isInCodeBlock && codeBlockContent.length > 0) {
        const codeContent = codeBlockContent.join("\n");
        const parsedElement = {
            content: codeContent,
            tag: "code"
        };
        if (!firstLine) firstLine = parsedElement;
        if (keywordLower && codeContent.toLowerCase().includes(keywordLower)) {
            parsedElement.content = parsedElement.content.replace(keywordRegex, '<span class="highlight">$1</span>');
            matchingLines.push(parsedElement);
        }
    }
    if (keywordLower && matchingLines.length > 0) return matchingLines;
    return firstLine ? [
        firstLine
    ] : [];
};




const $5fc9ab8c998fa801$var$themes = {
    dark: {
        name: "dark",
        bg: "#202124",
        text: "#EDEDED",
        primary: {
            text: "#FAFAFA",
            bg: "#111111"
        },
        secondary: {
            text: "#A1A1AA",
            bg: "#38383b"
        }
    },
    light: {
        name: "light",
        bg: "#EAEAEA",
        text: "#171717",
        primary: {
            text: "#222327",
            bg: "#fff"
        },
        secondary: {
            text: "#A1A1AA",
            bg: "#F6F6F6"
        }
    }
};
const $5fc9ab8c998fa801$var$GlobalStyle = (0, $ik4Y8$createGlobalStyle)`
  .highlight {
    color: ${(props)=>props.theme.name === "dark" ? "#4B9EFF" : "#0066CC"};
    font-weight: 500;
  }
`;
const $5fc9ab8c998fa801$var$loadGeistFont = ()=>{
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
};
const $5fc9ab8c998fa801$var$Main = (0, $ik4Y8$styledcomponents).div`
    all: initial;
    font-family: 'Geist', sans-serif;
`;
const $5fc9ab8c998fa801$var$SearchButton = (0, $ik4Y8$styledcomponents).button`
    padding: 6px 6px;
    font-family: inherit;
    width: ${({ inputWidth: inputWidth })=>inputWidth};
    border-radius: 8px;
    display: inline;
    color: ${(props)=>props.theme.secondary.text};
    outline: none;
    border: none;
    background-color: ${(props)=>props.theme.secondary.bg};
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    transition: background-color 128ms linear;
    text-align: left;
    cursor: pointer;
`;
const $5fc9ab8c998fa801$var$Container = (0, $ik4Y8$styledcomponents).div`
    position: relative;
    display: inline-block;
`;
const $5fc9ab8c998fa801$var$SearchOverlay = (0, $ik4Y8$styledcomponents).div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0000001A;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    z-index: 99;
`;
const $5fc9ab8c998fa801$var$SearchResults = (0, $ik4Y8$styledcomponents).div`
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: ${(props)=>props.theme.name === "dark" ? "rgba(0, 0, 0, 0.15)" : "rgba(255, 255, 255, 0.4)"};
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 15px;
    padding: 8px 0px 8px 0px;
    width: 792px;
    max-width: 90vw;
    height: 396px;
    z-index: 100;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: ${(props)=>props.theme.primary.text};
    
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(82px);
    -webkit-backdrop-filter: blur(82px);
    border-radius: 10px;
    
    box-sizing: border-box;

    @media only screen and (max-width: 768px) {
        height: 80vh;
        width: 90vw;
    }
`;
const $5fc9ab8c998fa801$var$SearchResultsScroll = (0, $ik4Y8$styledcomponents).div`
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-gutter: stable;
    scrollbar-width: thin;
    scrollbar-color: #383838 transparent;
    padding: 0 16px;
`;
const $5fc9ab8c998fa801$var$IconTitleWrapper = (0, $ik4Y8$styledcomponents).div`
    display: flex;
    align-items: center;
    gap: 8px;

    .element-icon{
        margin: 4px;
    }
`;
const $5fc9ab8c998fa801$var$Title = (0, $ik4Y8$styledcomponents).h3`
    font-size: 15px;
    font-weight: 400;
    color: ${(props)=>props.theme.primary.text};
    margin: 0;
    overflow-wrap: break-word;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
`;
const $5fc9ab8c998fa801$var$ContentWrapper = (0, $ik4Y8$styledcomponents).div`
    display: flex;
    flex-direction: column;
    gap: 12px; 
`;
const $5fc9ab8c998fa801$var$ResultWrapper = (0, $ik4Y8$styledcomponents).div`
    display: flex;
    align-items: flex-start;
    width: 100%;
    box-sizing: border-box;
    padding: 8px 16px;
    cursor: pointer;
    background-color: transparent;
    font-family: 'Geist', sans-serif;
    border-radius: 8px;

    word-wrap: break-word;
    overflow-wrap: break-word;
    word-break: break-word;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
    }
`;
const $5fc9ab8c998fa801$var$Content = (0, $ik4Y8$styledcomponents).div`
    display: flex;
    margin-left: 8px;
    flex-direction: column;
    gap: 8px;
    padding: 4px 0px 0px 12px;
    font-size: 15px;
    color: ${(props)=>props.theme.primary.text};
    line-height: 1.6;
    border-left: 2px solid ${(props)=>props.theme.primary.text}CC;
    overflow: hidden;
    
`;
const $5fc9ab8c998fa801$var$ContentSegment = (0, $ik4Y8$styledcomponents).div`
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding-right: 16px;
    overflow-wrap: break-word;
    white-space: normal;
    overflow: hidden; 
    text-overflow: ellipsis;
`;
const $5fc9ab8c998fa801$var$Toolkit = (0, $ik4Y8$styledcomponents).kbd`
    position: absolute;
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${(props)=>props.theme.primary.bg};
    color: ${(props)=>props.theme.secondary.text};
    font-weight: 600;
    font-size: 10px;
    padding: 3px 6px;
    border: 1px solid ${(props)=>props.theme.secondary.text};
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    pointer-events: none;
`;
const $5fc9ab8c998fa801$var$Loader = (0, $ik4Y8$styledcomponents).div`
  margin: 2rem auto;
  border: 4px solid ${(props)=>props.theme.name === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)"};
  border-top: 4px solid ${(props)=>props.theme.name === "dark" ? "#FFFFFF" : props.theme.primary.bg};
  border-radius: 50%;
  width: 12px;
  height: 12px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const $5fc9ab8c998fa801$var$NoResults = (0, $ik4Y8$styledcomponents).div`
  margin-top: 2rem;
  text-align: center;
  font-size: 14px;
  color: ${(props)=>props.theme.name === "dark" ? "#E0E0E0" : "#505050"};
  font-weight: 500;
`;
const $5fc9ab8c998fa801$var$AskAIButton = (0, $ik4Y8$styledcomponents).button`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    width: calc(100% - 32px);
    margin: 0 16px 16px 16px;
    box-sizing: border-box;
    height: 50px;
    padding: 8px 24px;
    border: none;
    border-radius: 8px;
    color: ${(props)=>props.theme.text}; 
    cursor: pointer;
    font-size: 16px;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    background-color: ${(props)=>props.theme.name === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.03)"};

    &:hover {
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        background-color: ${(props)=>props.theme.name === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.06)"}; 
    }
`;
const $5fc9ab8c998fa801$var$SearchHeader = (0, $ik4Y8$styledcomponents).div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid ${(props)=>props.theme.name === "dark" ? "#FFFFFF24" : "rgba(0, 0, 0, 0.14)"};
`;
const $5fc9ab8c998fa801$var$TextField = (0, $ik4Y8$styledcomponents).input`
    width: calc(100% - 32px);
    margin: 0 16px;
    padding: 12px 16px;
    border: none;
    background-color: transparent;
    color: ${(props)=>props.theme.text}; 
    font-size: 20px;
    font-weight: 400; 
    outline: none;
    
    &:focus {
        border-color: none;
    }

    &::placeholder {
        color: ${(props)=>props.theme.name === "dark" ? "rgba(255, 255, 255, 0.6)" : "rgba(0, 0, 0, 0.5)"} !important;
        opacity: 100%; /* Force opacity to ensure placeholder is visible */
        font-weight: 500;
    }
`;
const $5fc9ab8c998fa801$var$EscapeInstruction = (0, $ik4Y8$styledcomponents).kbd`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 12px 16px 0;
    padding: 4px 8px;
    border-radius: 4px;
    background-color: transparent;
    border: 1px solid ${(props)=>props.theme.name === "dark" ? "rgba(237, 237, 237, 0.6)" : "rgba(23, 23, 23, 0.6)"};
    color: ${(props)=>props.theme.name === "dark" ? "#EDEDED" : "#171717"};
    font-size: 12px;
    font-family: 'Geist', sans-serif;
    white-space: nowrap;
    cursor: pointer;
    width: fit-content;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
`;
const $5fc9ab8c998fa801$export$79d13b60110f33be = ({ apiKey: apiKey = "74039c6d-bff7-44ce-ae55-2973cbf13837", apiHost: apiHost = "https://gptcloud.arc53.com", theme: theme = "dark", placeholder: placeholder = "Search or Ask AI...", width: width = "256px", buttonText: buttonText = "Search here" })=>{
    const [input, setInput] = (0, $ik4Y8$react).useState("");
    const [loading, setLoading] = (0, $ik4Y8$react).useState(false);
    const [isWidgetOpen, setIsWidgetOpen] = (0, $ik4Y8$react).useState(false);
    const inputRef = (0, $ik4Y8$react).useRef(null);
    const containerRef = (0, $ik4Y8$react).useRef(null);
    const [isResultVisible, setIsResultVisible] = (0, $ik4Y8$react).useState(false);
    const [results, setResults] = (0, $ik4Y8$react).useState([]);
    const debounceTimeout = (0, $ik4Y8$react).useRef(null);
    const abortControllerRef = (0, $ik4Y8$react).useRef(null);
    const browserOS = (0, $17f599bc115b22f1$export$34ee789f81ad4cb9)();
    const isTouch = "ontouchstart" in window;
    const getKeyboardInstruction = ()=>{
        if (isResultVisible) return "Enter";
        return browserOS === "mac" ? "\u2318 + K" : "Ctrl + K";
    };
    (0, $ik4Y8$react).useEffect(()=>{
        $5fc9ab8c998fa801$var$loadGeistFont();
        const handleClickOutside = (event)=>{
            if (containerRef.current && !containerRef.current.contains(event.target)) setIsResultVisible(false);
        };
        const handleKeyDown = (event)=>{
            if ((browserOS === "win" || browserOS === "linux") && event.ctrlKey && event.key === "k" || browserOS === "mac" && event.metaKey && event.key === "k") {
                event.preventDefault();
                inputRef.current?.focus();
                setIsResultVisible(true);
            } else if (event.key === "Escape") setIsResultVisible(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
    (0, $ik4Y8$react).useEffect(()=>{
        if (!input) {
            setResults([]);
            setLoading(false);
            return;
        }
        setLoading(true);
        if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
        if (abortControllerRef.current) abortControllerRef.current.abort();
        const abortController = new AbortController();
        abortControllerRef.current = abortController;
        debounceTimeout.current = setTimeout(()=>{
            (0, $c8bac80611553cdc$export$cfcc0908d6dfb8a6)(input, apiKey, apiHost, abortController.signal).then((data)=>setResults(data)).catch((err)=>!abortController.signal.aborted && console.log(err)).finally(()=>setLoading(false));
        }, 500);
        return ()=>{
            abortController.abort();
            clearTimeout(debounceTimeout.current ?? undefined);
        };
    }, [
        input
    ]);
    const handleKeyDown = (event)=>{
        if (event.key === "Enter") {
            event.preventDefault();
            openWidget();
        }
    };
    const openWidget = ()=>{
        setIsWidgetOpen(true);
        setIsResultVisible(false);
    };
    const handleClose = ()=>{
        setIsWidgetOpen(false);
        setIsResultVisible(true);
    };
    return /*#__PURE__*/ (0, $ik4Y8$jsx)((0, $ik4Y8$ThemeProvider), {
        theme: {
            ...$5fc9ab8c998fa801$var$themes[theme]
        },
        children: /*#__PURE__*/ (0, $ik4Y8$jsxs)($5fc9ab8c998fa801$var$Main, {
            children: [
                /*#__PURE__*/ (0, $ik4Y8$jsx)($5fc9ab8c998fa801$var$GlobalStyle, {}),
                /*#__PURE__*/ (0, $ik4Y8$jsxs)($5fc9ab8c998fa801$var$Container, {
                    ref: containerRef,
                    children: [
                        /*#__PURE__*/ (0, $ik4Y8$jsx)($5fc9ab8c998fa801$var$SearchButton, {
                            onClick: ()=>setIsResultVisible(true),
                            inputWidth: width,
                            children: buttonText
                        }),
                        isResultVisible && /*#__PURE__*/ (0, $ik4Y8$jsxs)((0, $ik4Y8$Fragment), {
                            children: [
                                /*#__PURE__*/ (0, $ik4Y8$jsx)($5fc9ab8c998fa801$var$SearchOverlay, {
                                    onClick: ()=>setIsResultVisible(false)
                                }),
                                /*#__PURE__*/ (0, $ik4Y8$jsxs)($5fc9ab8c998fa801$var$SearchResults, {
                                    children: [
                                        /*#__PURE__*/ (0, $ik4Y8$jsxs)($5fc9ab8c998fa801$var$SearchHeader, {
                                            children: [
                                                /*#__PURE__*/ (0, $ik4Y8$jsx)($5fc9ab8c998fa801$var$TextField, {
                                                    ref: inputRef,
                                                    value: input,
                                                    onChange: (e)=>setInput(e.target.value),
                                                    onKeyDown: (e)=>handleKeyDown(e),
                                                    placeholder: placeholder,
                                                    autoFocus: true
                                                }),
                                                /*#__PURE__*/ (0, $ik4Y8$jsx)($5fc9ab8c998fa801$var$EscapeInstruction, {
                                                    onClick: ()=>setIsResultVisible(false),
                                                    children: "Esc"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0, $ik4Y8$jsxs)($5fc9ab8c998fa801$var$AskAIButton, {
                                            onClick: openWidget,
                                            children: [
                                                /*#__PURE__*/ (0, $ik4Y8$jsx)("img", {
                                                    src: "https://d3dg1063dc54p9.cloudfront.net/cute-docsgpt.png",
                                                    alt: "DocsGPT",
                                                    width: 24,
                                                    height: 24
                                                }),
                                                /*#__PURE__*/ (0, $ik4Y8$jsx)("span", {
                                                    children: "Ask the AI"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0, $ik4Y8$jsx)($5fc9ab8c998fa801$var$SearchResultsScroll, {
                                            children: !loading ? results.length > 0 ? results.map((res, key)=>{
                                                const containsSource = res.source !== "local";
                                                const processedResults = (0, $17f599bc115b22f1$export$7f7dcc6594596059)(res.text, input);
                                                if (processedResults) return /*#__PURE__*/ (0, $ik4Y8$jsx)($5fc9ab8c998fa801$var$ResultWrapper, {
                                                    onClick: ()=>{
                                                        if (!containsSource) return;
                                                        window.open(res.source, "_blank", "noopener, noreferrer");
                                                    },
                                                    children: /*#__PURE__*/ (0, $ik4Y8$jsx)("div", {
                                                        style: {
                                                            flex: 1
                                                        },
                                                        children: /*#__PURE__*/ (0, $ik4Y8$jsxs)($5fc9ab8c998fa801$var$ContentWrapper, {
                                                            children: [
                                                                /*#__PURE__*/ (0, $ik4Y8$jsxs)($5fc9ab8c998fa801$var$IconTitleWrapper, {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, $ik4Y8$jsx)((0, $ik4Y8$ReaderIcon), {
                                                                            className: "title-icon"
                                                                        }),
                                                                        /*#__PURE__*/ (0, $ik4Y8$jsx)($5fc9ab8c998fa801$var$Title, {
                                                                            children: res.title
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0, $ik4Y8$jsx)($5fc9ab8c998fa801$var$Content, {
                                                                    children: processedResults.map((element, index)=>/*#__PURE__*/ (0, $ik4Y8$jsxs)($5fc9ab8c998fa801$var$ContentSegment, {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, $ik4Y8$jsxs)($5fc9ab8c998fa801$var$IconTitleWrapper, {
                                                                                    children: [
                                                                                        element.tag === "code" && /*#__PURE__*/ (0, $ik4Y8$jsx)((0, $ik4Y8$CodeIcon), {
                                                                                            className: "element-icon"
                                                                                        }),
                                                                                        (element.tag === "bulletList" || element.tag === "numberedList") && /*#__PURE__*/ (0, $ik4Y8$jsx)((0, $ik4Y8$ListBulletIcon), {
                                                                                            className: "element-icon"
                                                                                        }),
                                                                                        element.tag === "text" && /*#__PURE__*/ (0, $ik4Y8$jsx)((0, $ik4Y8$TextAlignLeftIcon), {
                                                                                            className: "element-icon"
                                                                                        }),
                                                                                        element.tag === "heading" && /*#__PURE__*/ (0, $ik4Y8$jsx)((0, $ik4Y8$HeadingIcon), {
                                                                                            className: "element-icon"
                                                                                        }),
                                                                                        element.tag === "blockquote" && /*#__PURE__*/ (0, $ik4Y8$jsx)((0, $ik4Y8$QuoteIcon), {
                                                                                            className: "element-icon"
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0, $ik4Y8$jsx)("div", {
                                                                                    style: {
                                                                                        flex: 1
                                                                                    },
                                                                                    dangerouslySetInnerHTML: {
                                                                                        __html: (0, $ik4Y8$dompurify).sanitize(element.content)
                                                                                    }
                                                                                })
                                                                            ]
                                                                        }, index))
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }, key);
                                                return null;
                                            }) : /*#__PURE__*/ (0, $ik4Y8$jsx)($5fc9ab8c998fa801$var$NoResults, {
                                                children: "No results found"
                                            }) : /*#__PURE__*/ (0, $ik4Y8$jsx)($5fc9ab8c998fa801$var$Loader, {})
                                        })
                                    ]
                                })
                            ]
                        }),
                        isTouch ? /*#__PURE__*/ (0, $ik4Y8$jsx)($5fc9ab8c998fa801$var$Toolkit, {
                            onClick: ()=>{
                                setIsWidgetOpen(true);
                            },
                            title: "Tap to Ask the AI",
                            children: "Tap"
                        }) : /*#__PURE__*/ (0, $ik4Y8$jsx)($5fc9ab8c998fa801$var$Toolkit, {
                            title: getKeyboardInstruction() === "Enter" ? "Press Enter to Ask AI" : "",
                            children: getKeyboardInstruction()
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $ik4Y8$jsx)((0, $773c081b67f0ead7$export$2b086ff69f92acd2), {
                    theme: theme,
                    apiHost: apiHost,
                    apiKey: apiKey,
                    prefilledQuery: input,
                    isOpen: isWidgetOpen,
                    handleClose: handleClose,
                    size: "large"
                })
            ]
        })
    });
};



if (typeof window !== "undefined") {
    const renderWidget = (elementId, props = {})=>{
        const root = (0, $ik4Y8$createRoot)(document.getElementById(elementId));
        root.render(/*#__PURE__*/ (0, $ik4Y8$jsx)((0, $773c081b67f0ead7$export$8d70f1ccc5dab46b), {
            ...props
        }));
    };
    const renderSearchBar = (elementId, props = {})=>{
        const root = (0, $ik4Y8$createRoot)(document.getElementById(elementId));
        root.render(/*#__PURE__*/ (0, $ik4Y8$jsx)((0, $5fc9ab8c998fa801$export$79d13b60110f33be), {
            ...props
        }));
    };
    window.renderDocsGPTWidget = renderWidget;
    window.renderSearchBar = renderSearchBar;
}


export {$773c081b67f0ead7$export$8d70f1ccc5dab46b as DocsGPTWidget, $5fc9ab8c998fa801$export$79d13b60110f33be as SearchBar};
//# sourceMappingURL=module.js.map
