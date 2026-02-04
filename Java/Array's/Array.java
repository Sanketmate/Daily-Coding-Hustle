class Array{
    public static void main(String[] args) {
        String[] arr = {"apple", "banana", "cherry"};
        for (String fruit : arr) {
            System.out.println(fruit);
        }
        //print last element
        System.out.println(arr[arr.length - 1]);
        System.out.println(arr.length);
        // arr.add("mango"); // This line will cause a compilation error
        // To add an element to an array, you need to create a new array with a larger size and copy the elements over
    }
}