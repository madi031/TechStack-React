'use strict';

export const selectLibrary = (libraryId) => {
	return {
		type: 'select_library',
		payload: libraryId,
	};
};
