
  
export function add(numbers) {
    if (!numbers) return 0;
  
    let delimiter = ',';
    if (numbers.startsWith('//')) {
      const parts = numbers.split('\n', 1);
      delimiter = parts[0].slice(2);
      numbers = numbers.slice(parts[0].length + 1);
    }
  
    const normalizedNumbers = numbers.replace(/\n/g, delimiter).split(delimiter);
    const negatives = [];
    let total = 0;
  
    for (const num of normalizedNumbers) {
      if (num) {
        const value = parseInt(num, 10);
        if (value < 0) {
          negatives.push(value);
        } else {
          total += value;
        }
      }
    }
  
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
    }
  
    return total;
  }