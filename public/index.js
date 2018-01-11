// $(document).ready(function(){
//
//   var about_list_item = {
//     title:"what is Lorem Ipsum?",
//     content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
//   }
//
//   var about_list_items = []
//
//   for(var i = 0; i < 3; i++)
//   about_list_items.push(about_list_item)
//
//   var target = document.getElementById("about-ul")
//
//   for(var i = 0; i < about_list_items.length; i++){
//     var li  = document.createElement("li")
//     var title = document.createElement("p")
//     title.innerHTML = about_list_items[i].title
//     title.className += "about-title"
//     li.appendChild(title)
//     var content = document.createElement("p")
//     content.innerHTML = about_list_items[i].content
//     content.className += "about-content"
//     li.appendChild(content)
//     target.append(li)
//   }
//
// });

$('html, body').animate({
    scrollTop: $("#contact").offset().top
}, 1000);
