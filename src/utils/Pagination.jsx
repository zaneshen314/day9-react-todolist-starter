import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './css/Pagination.css';

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [jumpPage, setJumpPage] = useState('');

    // 计算总页数
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // 点击页码按钮时
    const handlePageChange = (pageNumber) => {
        if (pageNumber < 1 || pageNumber > totalPages) return;
        setCurrentPage(pageNumber);
        onPageChange(pageNumber);
    };

    // 选择每页显示的条目数
    const handleItemsPerPageChange = (e) => {
        onPageChange(1);
    };

    // 跳转到指定页码
    const handleJumpPageChange = () => {
        const page = Number(jumpPage);
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            onPageChange(page);
        } else {
            alert('请输入有效的页码');
        }
    };

    return (
        <div className="pagination-container">
            <button
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                className="pagination-button"
            >
                {"<<"}
            </button>
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="pagination-button"
            >
                {"<"}
            </button>

            {/* 页码按钮 */}
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    disabled={currentPage === page}
                    className={`pagination-button ${currentPage === page ? "active" : ""}`}
                >
                    {page}
                </button>
            ))}

            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="pagination-button"
            >
                {">"}
            </button>
            <button
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
                className="pagination-button"
            >
                {">>"}
            </button>


            {/* 跳转到指定页 */}
            <div className="jump-page">
                <label>跳转到页:</label>
                <input
                    type="number"
                    value={jumpPage}
                    onChange={(e) => setJumpPage(e.target.value)}
                    min="1"
                    max={totalPages}
                />
                <button onClick={handleJumpPageChange}>跳转</button>
            </div>

            {/*<div className="per-page-selection">*/}
            {/*    <label>每页显示: </label>*/}
            {/*    <select value={itemsPerPage} onChange={handleItemsPerPageChange}>*/}
            {/*        <option value={5}>5</option>*/}
            {/*        <option value={10}>10</option>*/}
            {/*        <option value={15}>15</option>*/}
            {/*    </select>*/}
            {/*</div>*/}
        </div>
    );
};

// PropTypes 校验
Pagination.propTypes = {
    totalItems: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
