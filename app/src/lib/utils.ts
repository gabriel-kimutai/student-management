export const serializeNonPOJOs = (obj: object) => {
	return structuredClone(obj)
}

