/*
 * This is not a Sort Library,
 *  (okay, this is a sorter library!)
 *
 * D. Rimron <darran@xalior.com>
 */

if (djsex) {
    djsex.sort = {
        insertion: function(arr){
            for (var i=1;i<arr.length;i++){
                var v = arr[i];
                var p = i;

                while (p>0 && arr[p-1]>v){
                    arr[p]=arr[p-1];
                    p = p-1
                }

                arr[p]=v;
            }
        }
    }
} else {
    console.log('DJSEX ERROR: could not find djsex.core!');
}
