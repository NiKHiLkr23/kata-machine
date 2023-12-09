export default function bs_list(haystack: number[], needle: number): boolean {
    let left = 0;
    let right = haystack.length;

    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (haystack[mid] === needle) {
            return true;
        } else if (haystack[mid] < needle) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return false;
}
