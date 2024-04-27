// const express = require('express');
// const path = require('path');
// const { spawn } = require('child_process');

// const app = express.Router();
// // const app = express();

// app.get('/', (req, res) => {
//     // Gọi module Python và nhận kết quả trả về
//     const pythonProcess = spawn('python', ['./python/script.py']);
    
//     pythonProcess.stdout.on('data', (data) => {
//         const processedData = data.toString().trim();
//         console.log('node call python');
//         // Đổ dữ liệu ra view
//         res.render('pagehome', { processedData });
//     });
// });
// module.exports = app;

const express = require('express');
const path = require('path');
const { spawn } = require('child_process');

// Tạo router từ express.Router()
const router = express.Router();

router.get('/', (req, res) => {
    // Khởi tạo tiến trình con để gọi script Python
    const pythonProcess = spawn('python', ['./python/script.py']);
    
    // Khởi tạo một biến để lưu dữ liệu nhận được
    let dataFromPython = '';

    pythonProcess.stdout.on('data', (data) => {
        console.log('Receiving data from Python script...');
        dataFromPython += data.toString();
        console.log(dataFromPython);
    });

    pythonProcess.on('error', (error) => {
        console.log('Error running Python script:', error);
        res.status(500).send('Failed to run Python script.');
    });

    pythonProcess.on('close', (code) => {
        console.log(`Python script closed with code ${code}`);
        if (code === 0) {
            res.render('pagehome', { processedData: dataFromPython.trim() });
        } else {
            res.status(500).send('Python script failed.');
        }
    });
});

// Xuất router để sử dụng trong các phần khác của ứng dụng
module.exports = router;

