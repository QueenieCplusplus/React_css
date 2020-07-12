// 2020, 7/12 am 9:55 -
// CSS transition 轉場 (為類別指定合適的 CSS 樣式)
// 使用 <ReactCSSTransitionGroup/> 此 addons 附加元件
// interval rendering 間隔渲染 (也包括可以渲染捲軸 slide bar & canvas)

// 加入附加元件
var React = require("react");
var ReactCSSTransitionGroup = React.addons.ReactCSSTransitionGroup;

// html 
<ReactCSSTransitionGroup transitionName = 'qStyle'
    transitionEnter={this.state.enableAnimation}
    transitionLeave={false}
>
    {qustionIssued}
</ReactCSSTransitionGroup>

// 附加元件的屬性 transitionName 連接該元素
// 如上屬性連結 4 項 CSS 類別即如下四個子元件
// name-enter、name-enter-active、name-leave、name-leave-active
// 分別表示此附加元件與其子元件之間的關係，附加元件因應調整為自動增加或移除這些子類別
// 這跟樣式進場與出場方式有關

// css
// .前可能會加上選擇器確保這些樣式的 scope

// 馬上生效
.qStyle-enter{

    // 彈出的視覺效果
    transform: scale(1.2); // 放大倍數
    transition: transform 0.2s // 過程歷經時間

}

// 選中時生效
.qStyle-enter-active{
    transform:

}

.qStyle-leave{
    transform:
    opacity: 0;

}

.qStyle-leave-active{

}




