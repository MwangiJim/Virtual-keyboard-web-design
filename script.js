  let OutputScreen = document.getElementById('OutputScreen');
  let prev = document.getElementById('prev');
  let next = document.getElementById('next');
  let header = document.getElementById('header');
  let thumbnail = document.getElementsByClassName('thumbnail');
  let backGroundImg = new Array(
      "/bg.jpg",
      "/2.jpg",
      "/3.jpg",
      "/4.jpg",
      "/7.jpg",
      "/8.jpg",
      "/img2.jpg",
      "/img3.jpg",
      "/img8.jpg"
  );
  let i =0;

  next.onclick =()=>{
   if(i < backGroundImg.length-1){
    header.style.backgroundImage = 'url("'+backGroundImg[i+1]+'")';
    //thumbnail[i+1].classList.add('active');
    //thumbnail[i].classList.remove('active');
    i++;
   }
  }
  prev.onclick =()=>{
    if(i > 0){
     header.style.backgroundImage = 'url("'+backGroundImg[i-1]+'")';
    // thumbnail[i-1].classList.add('active');
    // thumbnail[i].classList.remove('active');
     i--;
    }
   }
  function Display(num){
      OutputScreen.value += num;
  }
  function Calculate(){
      try{
          OutputScreen.value = eval(OutputScreen.value);
      }
      catch(err){
          alert('Invalid');
          alert(Date());
      }
  }
 function AllClear(){
    OutputScreen.value = "";
  }
  function Delete(){
    OutputScreen.value = OutputScreen.value.slice(0,-1);
  }
//   function Capital(){
//     buttons = buttons.toUpperCase();

//     document.getElementById('button1').innerHTML = buttons;
//   }
//   function CreateSpace(){
//       OutputScreen.value = OutputScreen.value.slice(1,0);
//   }

//  let student = 'Jimmy';

//  student = student.toLowerCase();

//  document.getElementById('text').innerHTML = student;