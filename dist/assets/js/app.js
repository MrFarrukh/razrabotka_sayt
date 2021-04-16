

const btn = document.getElementById("headbtn")
const row = document.getElementById("headrow")

  btn.addEventListener('click',function(){
      if(row.classList.contains('active')){
          row.classList.remove('active')
          btn.classList.remove('show')
      }else{
          row.classList.add('active')
          btn.classList.add('show')
      }
  })

const alink = document.getElementById("aHead")
const amenu = document.querySelector('.aHeadRow')

alink.addEventListener('click',function(){
    if(amenu.classList.contains('aWork')){
        amenu.classList.remove('aWork')
    }else{
        amenu.classList.add('aWork')
    }
})