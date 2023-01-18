  

const onMutation = () => {
  const element = document.querySelector('.watch-video--skip-content-button');
  if (element) {
    element.click();
  }
}
  
const observer = new MutationObserver(onMutation);
  
observer.observe(document.body, {childList: true, subtree: true});


