import {
	compose,
	toMiddleware,
	addMeta,
	tagService,
	enhancedRender,
	createEnhancer,
	createAdaptableEnhancer,
	isPromise,
} from '../index';

describe('n-express-enhancer exports', () => {
	it('compose', () => {
		expect(typeof compose).toBe('function');
	});

	it('toMiddleware', () => {
		expect(typeof toMiddleware).toBe('function');
	});

	it('addMeta', () => {
		expect(typeof addMeta).toBe('function');
	});

	it('tagService', () => {
		expect(typeof tagService).toBe('function');
	});

	it('enhancedRender', () => {
		expect(typeof enhancedRender).toBe('function');
	});

	it('createEnhancer', () => {
		expect(typeof createEnhancer).toBe('function');
	});

	it('createAdaptableEnhancer', () => {
		expect(typeof createAdaptableEnhancer).toBe('function');
	});

	it('isPromise', () => {
		expect(typeof isPromise).toBe('function');
	});
});
