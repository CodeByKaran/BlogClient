import UserPhoto from "../components/user_photo/UserPhoto.jsx"


function ImagePreviewer(event,id) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const html = `
  <div class="rounded-md bg-inherit w-full h-full absolute inset-0 box-border flex flex-col items-center overflow-hidden p-2">
   <div class="w-full h-[90%] beforeGradient overflow-hidden rounded-md object-cover">
   <img src="${e?.target.result}" alt="${file?.name}" class=" rounded-md h-full "/>
  </div>
    <p class=" text-gray-300 h-[10%] w-full text-center text-[10px] break-words p-1 flex items-center justify-center">${file?.name}</p>
  </div>
`
      const imagePreview = document.getElementById(id);
      imagePreview.innerHTML = html;
    };
    reader.readAsDataURL(file);
  }
}



export {
   ImagePreviewer
}