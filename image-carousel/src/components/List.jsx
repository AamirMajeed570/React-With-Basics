import React from 'react';

const data = [
    { label: "IN", country: "India" },
    { label: "US", country: "United States" },
    { label: "GB", country: "United Kingdom" },
    { label: "CA", country: "Canada" },
    { label: "AU", country: "Australia" },
    { label: "FR", country: "France" },
    { label: "DE", country: "Germany" },
    { label: "JP", country: "Japan" },
    { label: "CN", country: "China" },
    { label: "BR", country: "Brazil" }
];

const List = () => {
    return (
        <div>
            <select>
                {data.map((ele, index) => (
                    <option key={index} value={ele.label}>
                        {ele.country}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default List;
