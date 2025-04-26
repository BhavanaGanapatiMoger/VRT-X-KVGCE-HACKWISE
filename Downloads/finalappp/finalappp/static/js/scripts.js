document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('upload-form');
    const fileInput = document.getElementById('file');
    const fileNameDiv = document.getElementById('file-name');
    const submitBtn = document.getElementById('submit-btn');
    const spinner = document.getElementById('loading-spinner');

    if (form && fileInput) {
        // Display selected file name
        fileInput.addEventListener('change', () => {
            if (fileInput.files.length > 0) {
                const file = fileInput.files[0];
                if (file.size > 100 * 1024 * 1024) {
                    alert('File size exceeds 100MB.');
                    fileInput.value = '';
                    return;
                }
                fileNameDiv.textContent = `Selected: ${file.name}`;
            } else {
                fileNameDiv.textContent = '';
            }
        });

        // Show loading spinner on form submit
        form.addEventListener('submit', () => {
            submitBtn.disabled = true;
            spinner.classList.remove('d-none');
        });
    }
});