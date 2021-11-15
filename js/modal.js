        // Get the modal
        let modal = document.getElementById('myModal');

        // Get the <span> element that closes the modal
        let span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }

        // Get all images and insert the clicked image inside the modal
        // Get the content of the image description and insert it inside the modal image caption

        let images = document.getElementsByTagName('img');
        let modalImg = document.getElementById("img01");
        let captionText = document.getElementById("caption");
        let i;
        for (i = 2; i < images.length; i++) {
            images[i].onclick = function () {
                modal.style.display = "block";
                modalImg.src = this.src;
                modalImg.alt = this.alt;
                captionText.innerHTML = this.nextElementSibling.innerHTML;
            }
        }
