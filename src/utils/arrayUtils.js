export default {
    sortObjectArray(objectArray, sortByProperty, isAscending = true) {
        if (!sortByProperty) return objectArray;

        return objectArray.sort((a, b) => {
            var x = a[sortByProperty];
            var y = b[sortByProperty];
            var direction = isAscending ? 1 : -1;
            return x < y ? -1 * direction : x > y ? 1 * direction : 0;
        });
    },

    sortObjectArray(objectArray, sortByProperty, isAscending = true) {
        if (!sortByProperty) return objectArray;

        return objectArray.sort((a, b) => {
            var x = a[sortByProperty];
            var y = b[sortByProperty];
            var direction = isAscending ? 1 : -1;
            return x < y ? -1 * direction : x > y ? 1 * direction : 0;
        });
    },

    pageArray(array, pageNumber = 1, pageSize = 10) {
        pageNumber = Number(pageNumber);
        pageSize = Number(pageSize);

        pageNumber--;
        let startPage = pageNumber === 0 ? 0 : pageNumber * pageSize;
        let endPage = startPage + pageSize;
        let pageCount = Math.ceil(array.length / pageSize);
        let pagedArray = array.slice(startPage, endPage);

        let result = {
            pageCount: pageCount,
            pagedArray: pagedArray
        };

        return result;
    },

    searchArrayByProperty(array, propertyName, searchCriteria) {
        if (!searchCriteria) return array;

        return array.filter(x => {
            if (
                typeof x[propertyName] === "string" ||
                typeof x[propertyName] === "string"
            ) {
                let value = x[propertyName].toString().toLowerCase();
                let criteria = searchCriteria.toLowerCase();
                return value.includes(criteria);
            }

            return false;
        });
    },

    searchArrayByAll(array, searchCriteria) {
        if (!searchCriteria) return array;

        let criteria = searchCriteria.toString().toLowerCase();

        return array.filter(x => {
            for (let prop in x) {
                if (
                    typeof x[prop] === "string" ||
                    typeof x[prop] === "string"
                ) {
                    let value = x[prop].toString().toLowerCase();
                    if (value.includes(criteria)) return true;
                }
            }

            return false;
        });
    },

    searchPagedArray(
        array,
        searchCriteria,
        pageNumber,
        pageSize,
        sortByProperty,
        isAscending
    ) {
        let filteredArray = this.searchArrayByAll(array, searchCriteria);
        let sortedArray = this.sortObjectArray(
            filteredArray,
            sortByProperty,
            isAscending
        );
        let pagedArray = this.pageArray(sortedArray, pageNumber, pageSize);

        return pagedArray;
    }
};
