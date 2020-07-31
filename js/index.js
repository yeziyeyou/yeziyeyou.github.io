$(function(){
    const ap = new APlayer({
        container: document.getElementById('aplayer'),
        fixed: false, //开启吸底模式listFolded
        mini: false,
        autoplay: true,
        theme: '#FADFA3',
        loop: 'all',
        order: 'list',
        preload: 'auto',
        volume: 0.7,
        mutex: true,
        listFolded: true,
        //listMaxHeight: 90,
        lrcType: 3,
        audio: data
    });
})