document.querySelector('.envelope').addEventListener('click', () => {
    if (document.querySelector('.letter').classList.contains('letter--open')) {
      document.querySelector('.letter').classList.remove('letter--open');
      document.querySelector('.letter').classList.add('letter--close');

      setTimeout(() => {
        document.querySelector('.letter').classList.remove('letter--close');
      }, 600);
    } else {
      document.querySelector('.letter').classList.remove('letter--close');
      document.querySelector('.letter').classList.add('letter--open');
    }
  });
  
  document.querySelector('.paper-close').addEventListener('click', () => {
    document.querySelector('.letter').classList.remove('letter--open');
    document.querySelector('.letter').classList.add('letter--close');

    setTimeout(() => {
      document.querySelector('.letter').classList.remove('letter--close');
    }, 600);
  });