/**
 * Removes padding from a base64 string
 * @param padded Base64 string with padding
 */
export const unpadBase64 = (padded = ""): string => padded.replace(/=/g, "");
