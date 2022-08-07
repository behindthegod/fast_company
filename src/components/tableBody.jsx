import React from 'react';
import PropTypes from "prop-types";
import _ from 'lodash';

const TableBody = ({ data, columns }) => {
    const renderContent = (item, column) => {
        if (columns[column].component) {
            const component = columns[column].component;
            if (typeof component === "function") {
                return component(item);
            }
            return component;
        }
        return _.get(item, columns[column].path);
            //если компонент существует, возвращаем компонент, если нет - возвращаем метод.
    }
    return (
        <tbody>
        {data.map((item) => (
            <tr key={item._id}>
                {Object.keys(columns).map((column) => (
                    <td key={column}>{renderContent(item, column)}</td>
                    //через lodash получаем профессии. хз зачем и почему.
                    //11 стр. если есть компонент, мы его отображаем. если нет, отображаем динамические даанные.
                ))}
            </tr>
        ))}
        </tbody>
    );
};
TableBody.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.object.isRequired
}

export default TableBody;