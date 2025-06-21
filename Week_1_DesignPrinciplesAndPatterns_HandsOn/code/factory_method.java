package code;

public class  factory_method{

    interface Drink {
        void whipUp();
    }

    static class MorningSip implements Drink {
        public void whipUp() {
            System.out.println("Making up a Morning Sip!");
        }
    }

    static class AfternoonBrew implements Drink {
        public void whipUp() {
            System.out.println(" Making up an Afternoon tea!");
        }
    }

    static class SunnyJuice implements Drink {
        public void whipUp() {
            System.out.println("Making up some Sunny Juice!");
        }
    }

    static abstract class DrinkMaker {
        public abstract Drink createDrink();
    }

    static class MorningSipMaker extends DrinkMaker {
        public Drink createDrink() {
            return new MorningSip();
        }
    }

    static class AfternoonBrewMaker extends DrinkMaker {
        public Drink createDrink() {
            return new AfternoonBrew();
        }
    }

    static class SunnyJuiceMaker extends DrinkMaker {
        public Drink createDrink() {
            return new SunnyJuice();
        }
    }

    public static class BrewBuddyDemo {
        public static void main(String[] args) {
            factory_method.DrinkMaker morningMaker = new factory_method.MorningSipMaker();
            factory_method.Drink morningDrink = morningMaker.createDrink();
            morningDrink.whipUp();

            factory_method.DrinkMaker afternoonMaker = new factory_method.AfternoonBrewMaker();
            factory_method.Drink afternoonDrink = afternoonMaker.createDrink();
            afternoonDrink.whipUp();

            factory_method.DrinkMaker sunnyMaker = new factory_method.SunnyJuiceMaker();
            factory_method.Drink sunnyDrink = sunnyMaker.createDrink();
            sunnyDrink.whipUp();
        }
    }
}    

