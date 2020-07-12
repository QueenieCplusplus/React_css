# React_css
assign style add-on to component

# transition group Life Cycle

轉場組生命週期

    // 馬上生效
    .qStyle-enter{


    }

    // 選中時生效
    .qStyle-enter-active{


    }


    // 自動離開
    .qStyle-leave{


    }

    // 離開時生效
    .qStyle-leave-active{

    }


# CSS transition group

樣式轉場組的使用叮嚀：

因為此附加元件會延遲其子元件的移除，直到動畫結束為止。所以倘若沒有為此附加元件的 transitionName 屬性指定 CSS，
則這些附加元件無法移除。

另外，此附加元件的子元件都各自字有一唯一的 k/v 屬性集，轉場組使用這些值判斷附加元件何時進場出場該組，
倘若沒有正確的主建屬性，動畫會失敗，且這附加元件也無法移除。

所以即便轉場組只有一子元件如進場，其進場內的主建屬性也需要具備清楚。


    .qStyle-enter{

        // 彈出的視覺效果
        // 主建屬性集必須齊全
        transform: scale(1.2); // 放大倍數
        transition: transform 0.2s // 過程歷經時間

    }

    .qStyle-enter-active{
        
        // 主建屬性集必須齊全
        transform:

    }

    .qStyle-leave{
    
        // 主建屬性集必須齊全
        transform:
        opacity: 0;

    }

    .qStyle-leave-active{
    
        // 主建屬性集必須齊全

    }
