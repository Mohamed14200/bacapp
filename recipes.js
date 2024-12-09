const recipes = {
    "recipes": [
        {
            "id": 1,
            "title": "كبسة دجاج",
            "category": "main",
            "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
            "ingredients": [
                "دجاجة كاملة",
                "3 أكواب أرز بسمتي",
                "2 بصل مفروم",
                "2 طماطم مفرومة",
                "بهارات كبسة",
                "زيت نباتي",
                "ملح وفلفل حسب الرغبة"
            ],
            "steps": [
                "يسخن الزيت ويقلى البصل حتى يصبح ذهبي اللون",
                "يضاف الدجاج ويقلب حتى يتحمر من جميع الجهات",
                "تضاف الطماطم والبهارات والملح والفلفل",
                "يضاف الماء ويترك حتى ينضج الدجاج",
                "يضاف الأرز المنقوع ويطهى حتى ينضج"
            ],
            "favorite": false
        },
        {
            "id": 2,
            "title": "كنافة بالجبن",
            "category": "dessert",
            "image": "https://images.unsplash.com/photo-1519676867240-f03562e64548",
            "ingredients": [
                "عجينة كنافة",
                "جبن عكاوي",
                "زبدة مذابة",
                "قطر (شربات)",
                "فستق مطحون للتزيين"
            ],
            "steps": [
                "تفرد عجينة الكنافة وتدهن بالزبدة",
                "يوضع الجبن في المنتصف",
                "تلف الكنافة وتشكل",
                "تخبز في الفرن حتى تصبح ذهبية اللون",
                "تسقى بالقطر وتزين بالفستق"
            ],
            "favorite": false
        },
        {
            "id": 3,
            "title": "سلطة تبولة",
            "category": "salad",
            "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
            "ingredients": [
                "برغل ناعم",
                "بقدونس مفروم",
                "نعناع مفروم",
                "طماطم مفرومة",
                "بصل أخضر",
                "عصير ليمون",
                "زيت زيتون",
                "ملح وفلفل"
            ],
            "steps": [
                "ينقع البرغل بالماء لمدة 30 دقيقة",
                "يخلط البقدونس والنعناع والطماطم والبصل",
                "يضاف البرغل المنقوع",
                "يتبل بعصير الليمون وزيت الزيتون والملح والفلفل",
                "تقدم باردة"
            ],
            "favorite": false
        },
        {
            "id": 4,
            "title": "مسقعة باذنجان",
            "category": "main",
            "image": "https://images.unsplash.com/photo-1598511796432-32663d0875f8",
            "ingredients": [
                "2 باذنجان كبير",
                "500غ لحم مفروم",
                "2 بصل مفروم",
                "3 طماطم مفرومة",
                "ثوم مهروس",
                "بهارات مشكلة",
                "زيت زيتون",
                "ملح وفلفل"
            ],
            "steps": [
                "يقطع الباذنجان شرائح ويقلى",
                "يقلى البصل والثوم ثم يضاف اللحم المفروم",
                "تضاف الطماطم والبهارات",
                "يرتب الباذنجان في صينية ويوضع فوقه خليط اللحم",
                "يخبز في الفرن لمدة 20 دقيقة"
            ],
            "favorite": false
        },
        {
            "id": 5,
            "title": "بسبوسة",
            "category": "dessert",
            "image": "https://images.unsplash.com/photo-1587248720327-8eb72564be1e",
            "ingredients": [
                "2 كوب سميد",
                "1 كوب جوز هند",
                "1 كوب سكر",
                "1 كوب زبادي",
                "½ كوب زيت",
                "ملعقة صغيرة فانيليا",
                "قطر للتقديم"
            ],
            "steps": [
                "تخلط جميع المكونات الجافة",
                "يضاف الزبادي والزيت والفانيليا",
                "تصب في صينية مدهونة",
                "تخبز في فرن متوسط الحرارة حتى تنضج",
                "تسقى بالقطر وهي ساخنة"
            ],
            "favorite": false
        },
        {
            "id": 6,
            "title": "حمص بطحينة",
            "category": "appetizer",
            "image": "https://images.unsplash.com/photo-1585109649139-366815a0d713",
            "ingredients": [
                "2 كوب حمص مسلوق",
                "½ كوب طحينة",
                "عصير ليمون",
                "2 فص ثوم",
                "ملح",
                "زيت زيتون للتقديم",
                "بقدونس للتزيين"
            ],
            "steps": [
                "يهرس الحمص في الخلاط",
                "تضاف الطحينة والثوم وعصير الليمون",
                "يضاف الملح حسب الرغبة",
                "يزين بزيت الزيتون والبقدونس",
                "يقدم مع الخبز العربي"
            ],
            "favorite": false
        }
    ]
};

// حفظ الوصفات في localStorage
if (!localStorage.getItem('recipes')) {
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

// استرجاع الوصفات من localStorage
function getRecipes() {
    return JSON.parse(localStorage.getItem('recipes')) || recipes;
}

// تحديث الوصفات في localStorage
function updateRecipes(updatedRecipes) {
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
}

// حفظ إعدادات التطبيق
function saveSettings(settings) {
    localStorage.setItem('appSettings', JSON.stringify(settings));
}

// استرجاع إعدادات التطبيق
function getSettings() {
    return JSON.parse(localStorage.getItem('appSettings')) || { fontSize: 16 };
}