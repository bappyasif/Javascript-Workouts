const url = '../docs/sample.pdf';
//const url = '../docs/sample1.pdf';

let pdfDoc = null,
 pageNum = 1,
 pageIsRendering = false,
 pageNumIsPending = null;

const scale = 1.1,
 canvas = document.querySelector("#pdf-render"),
 ctx = canvas.getContext("2d");

// Render Page
const renderPage = num => {
    pageIsRendering = true;

    // Get Page
    pdfDoc.getPage(num).then(page => {
        console.log(page);
        const viewport = page.getViewport({ scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
            canvasContext: ctx,
            viewport
        }

        page.render(renderContext).promise.then(() => {
            pageIsRendering = false;

            if(pageNumIsPending !== null) {
                renderPage(pageNumIsPending);
                pageNumIsPending = null;
            }
        });

        // Output Page
        document.querySelector("#page-num").textContent = num;
    });
};

// Check For Pages Rendring
const queryRenderPage = num => {
    if(pageIsRendering) {
        pageNumIsPending = num;
    } else {
        renderPage(num);
    }
}

// Navigate To Previous Page
const showPrevPage = () => {
    if(pageNum <= 1) {
        return;
    }
    pageNum--;
    queryRenderPage(pageNum);
}

// Navigate To Next Page
const showNextPage = () => {
    if(pageNum >= pdfDoc.numPages) {
        return;
    }
    pageNum++;
    queryRenderPage(pageNum);
}

// Get Document
pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;
    console.log(pdfDoc);

    document.querySelector("#page-count").textContent = pdfDoc.numPages;

    renderPage(pageNum);
})
    .catch(error => {
        // Display Error
        const div = document.createElement("div");
        div.className = "error";
        div.appendChild(document.createTextNode(error.message));
        //document.querySelector("body").replaceWith(div, canvas);
        document.querySelector("body").insertBefore(div, canvas);
        // Removal Of Top Bar 
        document.querySelector(".top-bar").style.display = "null";
});

// Button Events
document.querySelector("#prev-page").addEventListener("click", showPrevPage);
document.querySelector("#next-page").addEventListener("click", showNextPage);