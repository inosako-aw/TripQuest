import React, { useState, useEffect } from "react";
// CSSをインポート
import "./FlipPage.css";

// ページコンテンツを定義
const pages = [
    {
        content: (
            <div className="page" id="page1">
                <img src="../../public/decoration_top.svg" alt="画面上部の装飾" className="decoration_top" />
                <img src="../../public/title_logo.svg" alt="偉人から学ぶ人生レシピ　TripQuestTripQuest" className="title_logo" />
                <img src="Scroll_circle.svg" alt="" className="Scroll_circle1" />
                <img src="Scroll_Vector.svg" alt="" className="Scroll_Vector1" />
                <img src="../../public/decoration_bottom.svg" alt="画面下部の装飾" className="decoration_bottom" />
            </div>
        ),
    },
    {
        content: (
            <div className="page" id="page2">
                <div className="page_container1">
                    <h1 className="worries_title1">こんなお悩み<br />
                        抱えていませんか？</h1>
                    <p className="worries_text1">旅先がなかなか決まらない…。<br />
                        時間が余って暇になってしまった…。<br />
                        新しい趣味を見つけた！次はどこに行こう…。</p>
                    <img src="Scroll_circle.svg" alt="" className="Scroll_circle2" />
                    <img src="Scroll_Vector.svg" alt="" className="Scroll_Vector2" />
                </div>
            </div>
        ),
    },
    {
        content: (
            <div className="page" id="page3">
                <div className="page_container2">
                    <h1 className="worries_title2">「こんなお悩み」抱えていませんか？</h1>
                    <p className="worries_text2">旅先がなかなか決まらない…。<br />
                        時間が余って暇になってしまった…。<br />
                        新しい趣味を見つけた！次はどこに行こう…。<br />
                        TripQuestはそんなあなたを助ける<br />
                        ミッションクリア型旅サービスです</p>
                    <img src="Scroll_circle.svg" alt="" className="Scroll_circle2" />
                    <img src="Scroll_Vector.svg" alt="" className="Scroll_Vector2" />
                </div>
            </div>
        ),
    },
    {
        content: (
            <div className="page" id="page4">
                <div className="page_container1">
                    <h1 className="message_title1">日々考え続けるあなたへ</h1>
                    <p className="message_text1">旅で感じたもの<br />
                        自己分析のヒントになるかもしれません。</p>
                    <img src="Scroll_circle.svg" alt="" className="Scroll_circle2" />
                    <img src="Scroll_Vector.svg" alt="" className="Scroll_Vector2" />
                </div>
            </div>
        ),
    },
    {
        content: (
            <div className="page" id="page5">
                <div className="page_container2">
                    <h1 className="message_title2">
                        日々、考えすぎて<br />
                        頭がパンクしてしまっているあなたへ
                    </h1>
                    <p className="message_text2">
                        旅先で感じたもの、自己分析のヒントになるかもしれません。<br />
                        紙に書き出すのではなく、<br />
                        体験で考える自己分析の旅に出てみると<br />
                        今までは知らなかった新しい発見があなたを待っています。
                    </p>
                    <img src="Scroll_circle.svg" alt="" className="Scroll_circle2" />
                    <img src="Scroll_Vector.svg" alt="" className="Scroll_Vector2" />
                </div>
            </div>
        ),
    },
    {
        content: <Page6 />,
    },
    {
        content: <Page7 />,
    },
    {
        content: <Page8 />,
    },
    {
        content: (
            <div className="page" id="page9">
                <img src="../../public/gotoTrip.png" alt="旅に出る" />
            </div>
        ),
    },
];

function Page6() {
    const images = [
        "../../public/quest_img1.png",
        "../../public/quest_img2.png",
        "../../public/quest_img3.png",
        "../../public/quest_img4.png",
    ];

    const [currentImage, setCurrentImage] = useState(0);
    const [isFading, setIsFading] = useState(false); // フェードアウト用の状態を追加

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    const handleFadeOut = () => {
        setIsFading(true); // クリックでフェードアウト開始
    };

    return (
        <div className="page" id="page6">
            <div className="image-container">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`画像${index + 1}`}
                        className={`fade-image ${
                            currentImage === index ? "visible" : "hidden"
                        }`}
                    />
                ))}
            </div>
            <div className="text-container">
                <h2 className="quest_place">田端文志村記念館</h2>
                <p className="quest_access">
                    <a href="https://kitabunka.or.jp/tabata/information/">アクセス情報</a>
                </p>
                <h1 className="quest_title1">文豪が集まる地<br />田端の歴史を見てみよう</h1>
                <p className="quest_episode">移動中のちょこっとエピソード</p>
                <p
                    className={`quest_text ${isFading ? "fade-out" : ""}`} // フェードアウトのクラスを動的に追加
                    onClick={handleFadeOut} // クリックイベントでフェードアウトを開始
                >
                    「1日180本」何の数字？
                </p>
                <p
                    className={`hidden-text ${isFading ? "visible" : ""}`} // フェードアウト後に表示
                >
                    1.ヘビースモーカー<br />
                    １日に180本も吸っていたことがあったようです。<br />
                    彼の師である夏目漱石も煙草を吸っており、<br />
                    その時代の文豪たちも吸っている人が多かったそうです。
                </p>
                <p className="quest_clear">
                    クリア条件<br />
                    芥川の一人称は独特？展示品を鑑賞して探してみよう！
                </p>
            </div>
        </div>
    );
}
function Page7() {
    const images = [
        "../../public/quest_img5.png",
        "../../public/quest_img6.png",
        "../../public/quest_img7.png",
        "../../public/quest_img8.png",
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="page" id="page7">
            <div className="image-container">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`画像${index + 1}`}
                        className={`fade-image ${
                            currentImage === index ? "visible" : "hidden"
                        }`}
                    />
                ))}
            </div>
            <div className="text-container">
                <h2 className="quest_place">そば処　浅野屋</h2>
                <p className="quest_access"><a href="https://www.ekiten.jp/shop_281076/access/">アクセス情報</a></p>
                <h1 className="quest_title1">芥川の愛した<br />料理を味わいに行こう</h1>
                <p className="quest_episode">移動中のちょこっとエピソード</p>

                
                <p className="quest_text">出前蕎麦</p>
                <p className="quest_clear">
                    クリア条件<br />
                    芥川の愛した料理を味わう　（写真二枚）
                </p>
            </div>
        </div>
    );
}

function Page8() {
    const images = [
        "../../public/quest_img9.png",
        "../../public/quest_img10.png",
        "../../public/quest_img11.png",
        "../../public/quest_img12.png",
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="page" id="page8">
            <div className="image-container">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`画像${index + 1}`}
                        className={`fade-image ${
                            currentImage === index ? "visible" : "hidden"
                        }`}
                    />
                ))}
            </div>
            <div className="text-container">
            <h2 className="quest_place">東洋文庫ミュージアム</h2>
                <p className="quest_access"><a href="https://toyo-bunko.or.jp/access/">アクセス情報</a></p>
                <h1 className="quest_title1">芥川龍之介の<br />小説を読んでみよう</h1>
                <p className="quest_episode">移動中のちょこっとエピソード</p>
                <p className="quest_text">最期の言葉</p>
                <p className="quest_clear">
                    クリア条件<br />
                    芥川龍之介の小説を読む
                </p>
            </div>
        </div>
    );
}

function App({ currentPage, setCurrentPage }) {
    useEffect(() => {
        const handleScroll = (e) => {
            if (e.deltaX > 50 && currentPage < pages.length - 1) {
                setCurrentPage((prev) => prev + 1);
            } else if (e.deltaX < -50 && currentPage > 0) {
                setCurrentPage((prev) => prev - 1);
            }
        };

        window.addEventListener("wheel", handleScroll);
        return () => window.removeEventListener("wheel", handleScroll);
    }, [currentPage, setCurrentPage]);

    return (
        <div className="FlipBook-container">
            <div className="page-wrapper">{pages[currentPage].content}</div>
        </div>
    );
}

export default App;
