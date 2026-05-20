/**
 * Hàm hiển thị bài thi theo mã đề
 * @param {number} examNumber - Mã số đề thi (3-7)
 */
function showExam(examNumber) {
  // Ẩn tất cả các phần thi
  const examSections = document.querySelectorAll('.exam-section');
  examSections.forEach(section => section.classList.remove('active'));
  
  // Hiển thị phần thi được chọn
  const selectedExam = document.getElementById(`exam${examNumber}`);
  if (selectedExam) {
    selectedExam.classList.add('active');
  }
  
  // Cập nhật trạng thái nút điều hướng
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(btn => btn.classList.remove('active'));
  
  // Tìm và highlight nút được nhấn
  const buttons = Array.from(navButtons);
  const targetButton = buttons.find(btn => btn.textContent.includes(`Đề ${examNumber}`));
  if (targetButton) {
    targetButton.classList.add('active');
  }
}

/**
 * Hàm bật/tắt hiển thị đáp án
 * @param {string} contentId - ID của phần đáp án cần bật/tắt
 */
function toggleAns(contentId) {
  const answerContent = document.getElementById(contentId);
  if (answerContent) {
    answerContent.classList.toggle('show');
  }
}

// Khởi tạo trang khi tải xong
document.addEventListener('DOMContentLoaded', () => {
  // Đảm bảo đề 3 hiển thị khi mở trang
  showExam(3);
});
