function validParentheses(parenStr) {
    while (parenStr.includes('()')){
      parenStr = parenStr.replace('()', '')
    }
    return parenStr == ''
  }