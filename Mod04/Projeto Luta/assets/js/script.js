let log = new Log(document.querySelector('.log'));
let char = new Knight('Ivon');
let monster = new Bigmonster();

const stage =  new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

stage.start()