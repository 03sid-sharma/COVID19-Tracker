const URL="https://covid19.mathdro.id/api";

let app=angular.module("MyApp",[]);

app.controller("MyCtrl",($scope,$http)=>{
    $scope.title="Numbers at a glance ..";
    // calling api
    $http.get(URL).then(
        (response)=>{
        //success
        console.log(response.data);
        $scope.all_data=response.data;
    },
    (error)=>{
        //error
        console.log(error);
    }
    );
    //get country data
    $scope.get_c_data=()=>{
        let country=$scope.c;
        if(country==""){
            $scope.c_data=undefined;
            return;
        }
        $http.get(`${URL}/countries/${country}`)
        .then((response)=>{
            //success
            $scope.c_data=response.data;
        },
        (error)=>{
            //error
            console.log(error);
        }
        );
    };
});