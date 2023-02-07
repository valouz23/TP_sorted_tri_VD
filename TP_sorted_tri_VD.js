function sorted_fusion(t1,t2){
    if(t1.length==0){
        return(t2);
    } else if (t2.length==0){
        return(t1);
        // Ces 4 lignes sont faites pour s'occuper des cas où au moins un des tableaux est vide. Si c'est le cas, on renvoit l'autre, vu qu'ils sont censés être triés ça marche.
    } else {
        // Ensuite, on va créér un nouveau tableau et parcourir les tableau 1 et 2 simultanément, et à chaque fois comparer les premiers éléments de chaque tableau.
        // Puis, on ajoute le plus petit de ces deux éléments. Comme ils sont triés en théorie, cela ce qu'on ajoute dans le nouveau tableau sera bien trié.
        var new_tab = [];
        var e1= (t1.shift());
        var e2= t2.shift();
        while ((t1.length!=0) && (t2.length!=0)){ // On fait la boucle, jusqu'à ce que au moins l'un des tableaux soient vide.
            if (e1<e2){
                new_tab.push(e1);
                var e1=t1.shift();
            }else{
                new_tab.push(e2);
                var e2=t2.shift();
            }
        }
        var response= new_tab.concat(t1,t2); // Une fois qu'on des tableaux est vides, il suffit d'ajouter ce qu'il reste de l'autre tableau. Ici, je rajoute juste les deux,
        // puisque de toute façon, l'un est vide, donc ça donnera le bon résultat, et j'ai pas à faire de condition comme ça.
        return(response);
    }
}



const args = process.argv.slice(2); // on récupère les arguments.

if(args.length != 2){
    console.error('error : not right number of arguments');
    process.exit(1);
    // On vérifie qu'il y a bien exactement deux tableaux
}
var t1 = JSON.parse(args[0]);
var t2 = JSON.parse(args[1]); // ces deux lignes, c'est parce qu'on récupère en arguments des chaines de caractères, alors que j'ai besoin d'un tableau.
const result = sorted_fusion(t1,t2);

// var result=sorted_fusion([1,2,4],[]);
console.log(result);

// Si vous voulez tester la fonction voici quelques cas qui me semblent intéressants à vérifier pour être sûr que ça marche:
// node TP_sorted_tri_VD.js [] []
// node TP_sorted_tri_VD.js [] [3,6,7,9]
// node TP_sorted_tri_VD.js [1,2,4,5,8] []
// node TP_sorted_tri_VD.js [1,2,4,5,8] [3,6,7,9]
// node TP_sorted_tri_VD.js [1,2,3,4,5,6] [7,8,9,10,11,12]
// node TP_sorted_tri_VD.js [7,8,9,10,11,12] [1,2,3,4,5,6] 
// node TP_sorted_tri_VD.js [1,2,4,5,8,16,27,37,48,69] [3,6,7,9,36,42,58]
