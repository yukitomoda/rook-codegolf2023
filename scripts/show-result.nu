# codegolf.tsv フォームの結果スプレッドシート（のTSV）
# result.txt 答えの出力

let result = open result.txt | lines

open codegolf.tsv
    | reject "確認事項"
    | insert length {|r|
        $r."ソースコード" | str length
    }
    | insert check {|r|
        let code = $r."ソースコード"
        let output = $code | node 
        $result
            | zip ($output | lines)
            | each { $in | into record }
            | all { $in."0" == $in."1" }
    }
    | sort-by length
    | explore