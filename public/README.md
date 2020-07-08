giải thích về api cho e rồi ha.

còn có cả cách sử dung mongodb atlas

lưu ý: 

api chỉ xử lí data từ database và sau đó là gửi lại data dạng json cho client

ở client thì phải dùng ajax khi muốn tương tác với api, dựa vào kết quả từ api mà xử lí và tính toán để hiển thị ra

ở trong ví dụ này a làm 1 api để login cơ bản và ko có thêm mấy logic kiểu encrypt pass hay cấp token hay cookie gì cả nhé,

quan trọng e phải hiểu đc cách giao tiếp giữa client và server qua api nhé.

####

server nhận req ở / hay /index thì trả về giao diện cơ bản. 
form login ở /
phần xử lí của client để giao tiếp với server đc nhúng trong phần login này (main.js ở public)
tại sao main.js lại ở public thì là do đây là file sẽ đc sử dụng ở client nên e phải bỏ nó trong đó để no là file tĩnh thì mấy file pug mới sử dụng đc nó

phần logic trong đó a đã giai thích cho e trong lúc call rồi ha. sau này ko hiểu gì thì hỏi a nhé <3 

yêu e <3