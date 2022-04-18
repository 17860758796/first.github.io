function image() {
    for (let i=1;i<10;i++){
        let name = '../images/1 ('+ i + ').jpg';
        let div2 = document.createElement('div');
        let image1 = document.createElement('img');
        image1.src = name;
        image1.setAttribute('style','width: 200px;margin: 5px');
        let content = document.getElementById('content');
        content.appendChild(div2);
        div2.appendChild(image1);
    }
}
image();