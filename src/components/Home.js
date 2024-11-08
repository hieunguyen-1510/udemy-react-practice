const Home = () => {
    return (
        <div style={{ padding: '20px' }}>
            <p><strong>Yêu cầu:</strong></p>
            <ul>
                <li>Sử dụng API từ trang web <a href="https://reqres.in/" target="_blank" rel="noopener noreferrer">https://reqres.in/</a> để tạo website.</li>
                <li>Sử dụng thư viện React để tạo một màn hình website cơ bản bao gồm các chức năng:</li>
                <ol>
                    <li>Đăng nhập</li>
                    <li>Thêm User</li>
                    <li>Sửa User</li>
                    <li>Xoá User</li>
                    <li>Hiển thị tất cả các User</li>
                    <li>Tìm kiếm User theo Id</li>
                    <li>Sắp xếp theo FirstName</li>
                    <li>Import User từ file .csv</li>
                    <li>Export User ra file .csv</li>
                </ol>
                <li>Tự do tùy chỉnh HTML, CSS để có một website nhẹ nhàng, khoa học và đẹp.</li>
                <li>Commit và đẩy source code lên GitHub public.</li>
                <li>Triển khai website lên Heroku để demo.</li>
            </ul>
            <p><strong>Result:</strong></p>
            <ul>
                <li>Thời gian hoàn thành: 1-3 ngày</li>
                <li>Gửi link Heroku và GitHub link lại email này</li>
                <li>Thời gian phản hồi 2 ngày làm việc kể từ ngày nhận được bài thi.</li>
            </ul>
            <p><strong>Yêu cầu backend (optional - không bắt buộc):</strong></p>
            <p>
                Sử dụng Python Django REST Framework, tạo các API như trên trang web: <a href="https://reqres.in/" target="_blank" rel="noopener noreferrer">https://reqres.in/</a>
            </p>
        </div>
    );
}

export default Home;
