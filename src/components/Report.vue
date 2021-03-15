<template>
  <div class="report">
    <!-- <div class="mask"></div> -->
    <div
      class="report-sheet common"
      :class="{ active: !isShowPreview }"
      id="print-area"
    >
      <Print />
    </div>
    <div class="preview common" :class="{ active: isShowPreview }">
      <progress
        value="0"
        max="100"
        id="progress-bar"
        class="progress"
      ></progress>
      <div id="status" class="status"></div>
      <img
        src=""
        id="preview"
        :class="{ 'preview-image': isNotPreviewImage }"
      />
      <canvas
        class="page"
        :class="{ 'show-page': isNotShowPage }"
        size="A4"
        layout="landscape"
      ></canvas>
    </div>
    <div class="operation-buttons">
      <button @click="printSheet" title="点击进行模板填写并支持原生打印">
        下载模板
      </button>
      <button>上传报告</button>
      <input type="file" class="upload-file" @change="uploadFile" />
    </div>
  </div>
</template>

<script>
import Print from "@/components/Print";

export default {
  name: "Report",
  components: {
    Print,
  },
  data() {
    return {
      isShowPreview: true,
      showMask: false,
      isNotPreviewImage: true,
      isNotShowPage: true,
    };
  },
  methods: {
    uploadFile: function(e) {
      let isImage = false;
      let isPDF = false;
      const setProgress = (e) => {
        const fr = e.target;
        const loadingPercentage = (100 * e.loaded) / e.total;
        document.getElementById("progress-bar").value = loadingPercentage;
      };
      const changeStatus = (status) => {
        document.getElementById("status").innerHTML = status;
      };
      const loaded = (e) => {
        changeStatus("Load ended!");
        const fr = e.target;
        const result = fr.result;
        if (isImage) {
          const preview = document.getElementById("preview");
          preview.src = result;
        }
      };

      const errorHandler = (e) => {
        changeStatus("Error: " + e.target.error.name);
      };

      const processFile = (file) => {
        const fr = new FileReader();
        if (isImage) {
          fr.readAsDataURL(file);
        } else {
          fr.readAsArrayBuffer(file);
        }
        fr.onerror = errorHandler;
        fr.onabort = () => changeStatus("Start Loading");
        fr.onloadstart = () => changeStatus("Start Loading");
        fr.onload = async (result) => {
          changeStatus("Loaded");
          if (isPDF) {
            var typeArray = new Uint8Array(result.target.result);
            const pdf = await PDFJS.getDocument(typeArray);
            // you can now use *pdf* here
            console.log("the pdf has a ", pdf.numPages, "page(s).");
            const page = await pdf.getPage(pdf.numPages);
            // you can now use *page* here
            var viewport = page.getViewport(2.0);
            var canvas = document.querySelector("canvas");
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            page.render({
              canvasContext: canvas.getContext("2d"),
              viewport: viewport,
            });
          }
        };
        fr.onloadend = (e) => loaded(e);
        fr.onprogress = setProgress;
      };

      this.isShowPreview = false;
      const file = e.currentTarget.files[0];
      if (file) {
        console.log({ file });
        if (file.type == "application/pdf") {
          isPDF = true;
          this.isNotPreviewImage = true;
          this.isNotShowPage = false;
        } else {
          if (file.type.split("/")[0] == "image") {
            isImage = true;
            this.isNotPreviewImage = false;
            this.isNotShowPage = true;
          } else {
            console.error(`${file.type}是不支持的类型。`);
          }
        }
        processFile(file);
      }
    },

    printSheet: function() {
      this.isShowPreview = true;
      const prtContent = document.querySelector("#print-area");
      const WinPrint = window.open(
        "",
        "mywindow",
        "status=1,width=800,height=800"
      );
      WinPrint.document.write("<html><head><title>Print</title>");
      WinPrint.document.write(`<style>
      h1 {
        text-align: center;
        min-width: 600px;
        max-width: 80vw;
        margin: auto;
      }
      .first-line,
      .second-line,
      .thrid-line,
      .forth-line,
      .fifth-line {
        min-width: 600px;
        max-width: 90vw;
        display: flex;
        margin: auto;
        flex-direction: row;
        justify-content: space-evenly;
        font-size: 20px;
        margin-top: 20px;
      }
      .first-line > *,
      .second-line > * {
        height: 30px;
        line-height: 30px;
        border-radius: 5px;
      }
      .thrid-line > *,
      .forth-line > *,
      .fifth-line > * {
        min-height: 200px;
        line-height: 30px;
        border-radius: 5px;
      }
      .first-line span,
      .second-line span,
      .thrid-line span,
      .forth-line span,
      .fifth-line span {
        text-align: center;
        width: 11%;
        display: inline-block;
      }
      .first-line input,
      .second-line input {
        width: 22%;
      }
      .thrid-line div,
      .forth-line div,
      .fifth-line div {
        padding: 0px 5px;
        width: 88%;
        height: 100%;
        border: 1px solid black;
        text-align: left;
      }
      </style>`);
      WinPrint.document.write("</head><body>");
      WinPrint.document.write(prtContent.innerHTML);
      WinPrint.document.write("</body></html>");
      WinPrint.window.onload = function() {
        alert("填写完毕后，可以通过ctrl + P 进行打印");
      };
      // WinPrint.window.onafterprint = function() {
      //   WinPrint.close();
      // }
    },
  },
};
</script>

<style scoped>
.report {
  overflow-y: auto;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  z-index: 0;
}
.report-sheet {
  position: relative;
}
.mask {
  position: absolute;
  top: 0;
  left: 10%;
  bottom: 0;
  width: 78%;
  height: 84%;
  z-index: 100;
  background: rgba(29, 27, 29, 0.1);
}
.report .active {
  display: none;
}
.common {
  height: calc(100vh - 100px);
  max-height: calc(100vh - 100px);
  border: 1px solid black;
  overflow-y: auto;
  width: 80%;
  margin: auto;
}
.progress {
  width: 100px;
  height: 20px;
  margin: auto;
}
.status {
  width: 50%;
  margin: auto;
  height: 50px;
  margin-top: 20px;
}
.preview img {
  width: 400px;
  height: 400px;
  display: block;
  margin: auto;
}
.preview .preview-image {
  display: none;
}
.page {
  background: white;
  display: block;
  margin: 0 auto;
  margin-bottom: 0.5cm;
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
}
canvas.show-page {
  display: none;
}
.page[size="A4"] {
  width: 21cm;
  height: 29.7cm;
}
.operation-buttons {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  width: 90%;
  margin: auto;
  margin-top: 2px;
  height: 45px;
  min-width: 380px;
}
.operation-buttons button {
  outline: none;
  font-size: 1em;
  cursor: pointer;
  color: white;
  width: 20%;
  height: 100%;
  background: #304156;
}
.upload-file {
  position: absolute;
  width: 20%;
  height: 100%;
  cursor: pointer;
  right: 20%;
  opacity: 0;
}
</style>
