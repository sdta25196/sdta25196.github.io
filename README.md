toPrimitive 对象的原始值转换哦。

有[Symbol.toPrimitive] 的时候走[Symbol.toPrimitive]
没有的时候
hint为 string的时候走toString 或者 valueof
hint为 number|defualt的时候走valueof 或者 tostring
