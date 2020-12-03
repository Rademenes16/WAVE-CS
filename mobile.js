if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    alert("This site was not intended to work on mobile devices. Please keep it in mind."); 
    // detected mobile device - alert user  
  }
  else{
    //not detected any mobile device - continue
  }