class Recursion 
{
  //Warmup problem
  // static iterativeCalculate(n)
  // {
  //   const stringN = n.toString();
  //   let returnSum = 0;
  //   for (let i = 0; i < stringN.length; i++)
  //   {
  //     returnSum += parseInt(stringN.charAt(i));
  //   }
  //   return returnSum;
  // }
  // static recursiveCalculate(n, index=null)
  // {
  //   const stringN = n.toString();
    
  //   if (index !== null)
  //   {
  //     return (index < stringN.length) ? parseInt(stringN.charAt(index)) + this.recursiveCalculate(n, index + 1) : 0;
  //   } else
  //   {      
  //     return Recursion.recursiveCalculate(n, 0);
  //   }
  // }
  //Problem 1
  static isPalindrome(str)
  {
    for (let i = 0; i < str.length/2; i++)
    {
      if (str.charAt(i) !== str.charAt(str.length-i-1)) return false;
    }
    return true;
  }
  static iterativeCalculate(str)
  {
    let palindromeNum = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.length-1; i++)
    {
      for (let j = i+1; j < str.length; j++)
      {
        if (this.isPalindrome(str.slice(i, j))) palindromeNum++;
      }
      
    }
    return palindromeNum;
  }
  static recursiveCalculate(str, index=null)
  {
      index = (index===null) ? index : 0;
    const currentStr = str.toString().slice(index, str.length-index).toLowerCase();
    if (index !== null)
    {
      if (index < str.length/2)
      {
        return (this.isPalindrome(currentStr)) ? 1 + this.recursiveCalculate(currentStr, index+1) : 0;
      }
      else
      {
        return 0;
      }
    }
  }
}
console.log(Recursion.iterativeCalculate('kAyakaaaaaa'));