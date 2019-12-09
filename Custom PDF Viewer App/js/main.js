const url = '../docs/sample.pdf';

let pdfDoc = null,
 pageNum = 1,
 pageIsRendering = false,
 pageNumIsPending = null;

const scale = 1.5,
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
}

// Get Document
pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;
    console.log(pdfDoc);

    document.querySelector("#page-count").textContent = pdfDoc.numPages;

    renderPage(pageNum);
});