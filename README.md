***
toPrimitive 对象的原始值转换哦。
有[Symbol.toPrimitive] 的时候走[Symbol.toPrimitive]
没有的时候:
hint为 string的时候走toString 或者 valueof
hint为 number|defualt的时候走valueof 或者 tostring

***
正则表达式有NFA DFA POSIX NFA三种引擎，JS是用的NFA

***
事件冒泡是微软定义的，
事件捕获是网景定义的，
ECMA规范吸纳了两种模式，addEventListener 默认使用冒泡，第三个参数传true就是用捕获，false，也使用冒泡

***
Accept and embrace all experiences
接受和拥抱所有经历

***
trust your intuition
相信你的直觉

***
动态规划(dp) 是求解最优化的递推问题！

***
幂等性：对同一个系统，使用同样的条件，一次请求和重复的多次请求对系统资源的影响是一致的
