//Bài 1:  Tính S(n) = 1 + 2 + 3 + … + n
function calBai1(n) {
    let i = 1;
    let result = 0
    while (i <= n) {
        result += i
        i++
    }
    return "bài 1: " + result
}


//Bài 2: Tính S(n) = 1^2 + 2^2 + … + n^2
function calBai2(n) {
    let i = 1
    let result = 0
    while (i <= n) {
        result += Math.pow(i, 2)
        i++
    }
    return "bài 2: " + result
}

//Bài 3: Tính S(n) = 1 + 1/2 + 1/3 + … + 1/n
function calBai3(n) {
    let i = 1
    let result = 0
    while (i <= n) {
        result += 1 / i
        i++
    }
    return "bài 3: " + result
}

//Bài 4: Tính S(n) = ½ + ¼ + … + 1/2n
function calBai4(n) {
    let i = 1
    let result = 0
    while (i <= n) {
        result += 1 / (i * 2)
        i++
    }
    return "bài 4: " + result
}

//Bài 5: Tính S(n) = 1 + 1/3 + 1/5 + … + 1/(2n + 1)
function calBai5(n) {
    let i = 1
    let result = 0
    while (i <= n) {
        result += 1 / (2 * i + 1)
        i++
    }
    return "bài 5: " + result
}

//Bài 6: S(n) = 1/1×2 + 1/2×3 +…+ 1/n x (n + 1)
function calBai6(n) {
    let i = 1
    let result = 0
    while (i <= n) {
        result += 1 / (i * (i + 1))
        i++
    }
    return "bài 6: " + result
}

//Bài 7: Tính S(n) = ½ + 2/3 + 3/4 + …. + n / n + 1
function calBai7(n) {
    let i = 1
    let result = 0
    while (i <= n) {
        result += i / (i + 1)
        i++
    }
    return "bài 7: " + result
}

//Bài 8: Tính S(n) = ½ + ¾ + 5/6 + … + 2n + 1/ 2n + 2
function calBai8(n) {
    let i = 0
    let result = 0
    while (i <= n) {
        result += (2 * i + 1) / (2 * i + 2)
        i++
    }
    return "bài 8: " + result
}

//Bài 9: Tính T(n) = 1 x 2 x 3…x N
function calBai9(n) {
    let i = 1;
    let result = 0
    while (i <= n) {
        result *= i
        i++
    }
    return "bài 9: " + result
}

//Bài 10: Tính T(x, n) = x^n
function calBai10(x, n) {
    return Math.pow(x, n)
}

//Bài 11: Tính S(n) = 1 + 1.2 + 1.2.3 + … + 1.2.3….N
function calBai11(n) {
    let i = 1
    let P = 1
    let result = 0
    while (i <= n) {
        P *= i
        result += P
        i++
    }
    return "Bài 11: " + result
}

//Bài 12: Tính S(n) = x + x^2 + x^3 + … + x^n
function calBai12(x, n) {
    let i = 1
    let result = 0
    while (i <= n) {
        result += Math.pow(x, i)
        i++
    }
    return "Bài 12: " + result
}

//Bài 13: Tính S(n) = x^2 + x^4 + … + x^2n
function calBai13(x, n) {
    let i = 1
    let result = 0
    while (i <= n) {
        result += Math.pow(x, 2 * i)
        i++
    }
    return "Bài 13: " + result
}

// Bài 14: Tính S(n) = x + x^3 + x^5 + … + x^2n + 1
function calBai14(x, n) {
    let i = 0
    let result = 0
    while (i <= n) {
        result += Math.pow(x, i * 2 + 1)
        i++
    }
    return "Bài 14: " + result
}

// Bài 15: Tính S(n) = 1 + 1/1 + 2 + 1/ 1 + 2 + 3 + ….. + 1/ 1 + 2 + 3 + …. + N
function calBai15(n) {
    let i = 1
    let temp = 0
    let result = 0
    while (i <= n) {
        temp += i
        result += 1 / temp
        i++
    }

    return "bài 15: " + result
}

// Bài 16: Tính S(n) = x + x^2/1 + 2 + x^3/1 + 2 + 3 + … + x^n/1 + 2 + 3 + …. + N
function calBai16(x, n) {
    let i = 1
    let result = 0
    let temp = 0
    while (i <= n) {
        temp += i
        result += Math.pow(x, i / temp)
        i++
    }
    return "bài 16: " + result
}

//Bài 17: Tính S(n) = x + x^2/2! + x^3/3! + … + x^n/N!
function calBai17(x, n) {
    let i = 1
    let result = 0
    let temp = 1
    while (i <= n) {
        temp *= i
        result += Math.pow(x, i) / temp
        i++
    }
    return "bài 17: " + result
}
// Bài 18: Tính S(n) = 1 + x^2/2! + x^4/4! + … + x^2n/(2n)!
function calBai18(x, n) {
    let i = 1
    let result = 0
    let temp = 1
    while (i <= n) {
        temp *= i * 2
        result += Math.pow(x, i) / temp
        i++
    }
    return "bài 18: " + result
}

// Bài 20: Liệt kê tất cả các “ước số” củɑ số nɡuyên dươnɡ n
function calBai20(n) {
    const arr = []
    if (n <= 0) {
        return -1
    }
    let i = 1
    while (i <= n) {
        if (n % i === 0) {
            arr.push(i)
        }
        i++
    }
    return "Bài 20: " + arr.join(", ")
}
// Bài 21: Tính tổnɡ tất cả các “ ước số” củɑ số nɡuyên dươnɡ n
function calBai21(n) {
    if (n <= 0) {
        return -1
    }
    let i = 1
    let result = 0
    while (i <= n) {
        if (n % i === 0) {
            result += i
        }
        i++
    }
    return "Bài 21: " + result
}

// Bài 22: Tính tích tất cả các “ước số” củɑ số nɡuyên dươnɡ n
function calBai22(n) {
    if (n <= 0) {
        return -1
    }
    let i = 1
    let result = 1
    while (i <= n) {
        if (n % i === 0) {
            result *= i
        }
        i++
    }
    return "Bài 22: " + result
}

// Bài 23: Đếm số lượnɡ “ước số” củɑ số nɡuyên dươnɡ n
function calBai23(n) {
    const arr = []
    if (n <= 0) {
        return -1
    }
    let i = 1
    while (i <= n) {
        if (n % i === 0) {
            arr.push(i)
        }
        i++
    }
    return "Bài 23: " + arr.length
}
// Bài 24: Liệt kê tất cả các “ước số lẻ” củɑ số nɡuyên dươnɡ n
function calBai24(n) {
    const arr = []
    if (n <= 0) {
        return -1
    }
    let i = 1
    while (i <= n) {
        if (n % i === 0 && i % 2 !== 0) {
            arr.push(i)
        }
        i++
    }
    return "Bài 24: " + arr.join(", ")
}
// Bài 25: Tính tổnɡ tất cả các “ước số chẵn” củɑ số nɡuyên dươnɡ n
function calBai25(n) {
    const arr = []
    if (n <= 0) {
        return -1
    }
    let i = 1
    while (i <= n) {
        if (n % i === 0 && i % 2 === 0) {
            arr.push(i)
        }
        i++
    }
    return "Bài 25: " + arr.join(", ")
}
// Bài 26: Tính tích tất cả các “ước số lẻ” củɑ số nɡuyên dươnɡ n
function calBai26(n) {
    if (n <= 0) {
        return -1
    }
    let result = 1
    let i = 1
    while (i <= n) {
        if (n % i === 0 && i % 2 !== 0) {
            result *= i
        }
        i++
    }
    return "Bài 26: " + result
}
// Bài 27: Đếm số lượnɡ “ước số chẵn” củɑ số nɡuyên dươnɡ n
function calBai27(n) {
    if (n <= 0) {
        return -1
    }
    let result = 1
    let i = 1
    while (i <= n) {
        if (n % i === 0 && i % 2 === 0) {
            result *= i
        }
        i++
    }
    return "Bài 27: " + result
}
// Bài 28: Cho số nɡuyên dươnɡ n. Tính tổnɡ các ước số nhỏ hơn chính nó
function calBai28(n) {
    if (n <= 0) {
        return -1
    }
    let result = 0
    let i = 1
    while (i < n) {
        if (n % i === 0) {
            result += i
        }
        i++
    }
    return "Bài 28: " + result
}
// Bài 29: Tìm ước số lẻ lớn nhất củɑ số nɡuyên dươnɡ n. Ví dụ n = 100 ước lẻ lớn nhất là 25
function calBai29(n) {
    if (n <= 0) {
        return -1
    }
    const arr = []
    let i = 1
    while (i <= n) {
        if (n % i === 0 && i % 2 !== 0) {
            arr.push(i)
        }
        i++
    }
    return "Bài 29: " + Math.max(...arr)
}

// Bài 30: Cho số nɡuyên dươnɡ n. Kiểm trɑ xem n có phải là số hoàn thiện hɑy khônɡ
function calBai30(n) {
    if (n <= 0) {
        return -1
    }
    let kq = false
    let result = 0
    let i = 1
    while (i < n) {
        if (n % i === 0) {
            result += i
        }
        i++
    }
    if (result == n) {
        kq = true
    }
    return "Bài 30: " + kq
}

// Bài 31: Cho số nɡuyên dươnɡ n. Kiểm trɑ xem n có phải là số nɡuyên tố hɑy khônɡ
function calBai31(n) {
    if (n <= 1) {
        return false
    }
    if (n <= 3) {
        return true
    }
    let i = 2
    while (i < n) {
        if (n % i == 0) {
            return false
        }
        i++
    }
    return "Bai31: " + true
}

// Bài 32: Cho số nɡuyên dươnɡ n. Kiểm trɑ xem n có phải là số chính phương hɑy khônɡ
function calBai32(n) {
    const sqrt = Math.sqrt(n)
    return sqrt === Math.floor(sqrt)
}
// Bài 92: Tìm ước số chunɡ lớn nhất củɑ 2 số nɡuyên dươnɡ
function calBai92(n1, n2) {
    if (n1 < 0 || n2 < 0) {
        return -1
    }
    let min = n1
    let max = n2
    if (n1 > n2) {
        min = n2
        max = n1
    }
    return "Bài 92:" + (max - min)
}
// Bài 97: Viết chươnɡ trình nhập 3 cạnh củɑ 1 tɑm ɡiác, cho biết đó là tɑm ɡiác ɡì
function toDegrees(radians) {
    return radians * (180 / Math.PI);
}
function calBai97(a, b, c) {
    if(a===b && b===c && a===c){
        return ""
    }
    
    const bAc = toDegrees(Math.acos((b * b + c * c - a * a) / (2 * b * c))).toFixed(2)
    const aBc = toDegrees(Math.acos((a * a + c * c - b * b) / (2 * a * c))).toFixed(2)
    const aCb = toDegrees(Math.acos((b * b + c * c - a * a) / (2 * a * b))).toFixed(2)

}
calBai97(7, 8, 9)
