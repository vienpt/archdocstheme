<template>
  <div class="">
    <div class="bg-gray-300">
      <!-- Top nav -->
      <div class="flex items-center bg-black">
        <div class="w-full max-w-screen-xl relative mx-auto px-6">
          <div class="py-4">
            <header class="flex flex-wrap items-center lg:py-0 py-2">
              <div class="flex-1 flex justify-between items-center">
                <router-link
                  to="/jp"
                  class="block"
                >
                  <svg
                    width="102"
                    height="19"
                    viewBox="0 0 102 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.64844 18C8.49219 17.6953 8.37891 17.3164 8.30859 16.8633C7.48828 17.7773 6.42188 18.2344 5.10938 18.2344C3.86719 18.2344 2.83594 17.875 2.01562 17.1562C1.20312 16.4375 0.796875 15.5312 0.796875 14.4375C0.796875 13.0938 1.29297 12.0625 2.28516 11.3438C3.28516 10.625 4.72656 10.2617 6.60938 10.2539H8.16797V9.52734C8.16797 8.94141 8.01562 8.47266 7.71094 8.12109C7.41406 7.76953 6.94141 7.59375 6.29297 7.59375C5.72266 7.59375 5.27344 7.73047 4.94531 8.00391C4.625 8.27734 4.46484 8.65234 4.46484 9.12891H1.07812C1.07812 8.39453 1.30469 7.71484 1.75781 7.08984C2.21094 6.46484 2.85156 5.97656 3.67969 5.625C4.50781 5.26562 5.4375 5.08594 6.46875 5.08594C8.03125 5.08594 9.26953 5.48047 10.1836 6.26953C11.1055 7.05078 11.5664 8.15234 11.5664 9.57422V15.0703C11.5742 16.2734 11.7422 17.1836 12.0703 17.8008V18H8.64844ZM5.84766 15.6445C6.34766 15.6445 6.80859 15.5352 7.23047 15.3164C7.65234 15.0898 7.96484 14.7891 8.16797 14.4141V12.2344H6.90234C5.20703 12.2344 4.30469 12.8203 4.19531 13.9922L4.18359 14.1914C4.18359 14.6133 4.33203 14.9609 4.62891 15.2344C4.92578 15.5078 5.33203 15.6445 5.84766 15.6445ZM21.773 8.49609C21.312 8.43359 20.9058 8.40234 20.5542 8.40234C19.273 8.40234 18.4331 8.83594 18.0347 9.70312V18H14.648V5.32031H17.8472L17.9409 6.83203C18.6206 5.66797 19.562 5.08594 20.7652 5.08594C21.1402 5.08594 21.4917 5.13672 21.8198 5.23828L21.773 8.49609ZM28.9327 15.5039C29.5577 15.5039 30.0655 15.332 30.4561 14.9883C30.8467 14.6445 31.0498 14.1875 31.0655 13.6172H34.2412C34.2334 14.4766 33.9991 15.2656 33.5381 15.9844C33.0772 16.6953 32.4444 17.25 31.6397 17.6484C30.8428 18.0391 29.96 18.2344 28.9912 18.2344C27.1787 18.2344 25.7491 17.6602 24.7022 16.5117C23.6553 15.3555 23.1319 13.7617 23.1319 11.7305V11.5078C23.1319 9.55469 23.6514 7.99609 24.6905 6.83203C25.7295 5.66797 27.1553 5.08594 28.9678 5.08594C30.5537 5.08594 31.8233 5.53906 32.7764 6.44531C33.7373 7.34375 34.2256 8.54297 34.2412 10.043H31.0655C31.0498 9.38672 30.8467 8.85547 30.4561 8.44922C30.0655 8.03516 29.5498 7.82812 28.9092 7.82812C28.1202 7.82812 27.5225 8.11719 27.1162 8.69531C26.7178 9.26562 26.5186 10.1953 26.5186 11.4844V11.8359C26.5186 13.1406 26.7178 14.0781 27.1162 14.6484C27.5147 15.2188 28.1202 15.5039 28.9327 15.5039ZM39.9595 6.70312C40.858 5.625 41.9869 5.08594 43.3462 5.08594C46.0962 5.08594 47.4908 6.68359 47.5298 9.87891V18H44.1431V9.97266C44.1431 9.24609 43.9869 8.71094 43.6744 8.36719C43.3619 8.01562 42.8423 7.83984 42.1158 7.83984C41.1236 7.83984 40.4048 8.22266 39.9595 8.98828V18H36.5728V0H39.9595V6.70312ZM50.0372 11.5664C50.0372 9.58984 50.4786 8.01562 51.3614 6.84375C52.252 5.67188 53.4669 5.08594 55.0059 5.08594C56.2403 5.08594 57.2598 5.54688 58.0645 6.46875V0H61.463V18H58.4044L58.2403 16.6523C57.3966 17.707 56.3106 18.2344 54.9825 18.2344C53.4903 18.2344 52.2911 17.6484 51.3848 16.4766C50.4864 15.2969 50.0372 13.6602 50.0372 11.5664ZM53.4239 11.8125C53.4239 13 53.6309 13.9102 54.045 14.543C54.4591 15.1758 55.0606 15.4922 55.8497 15.4922C56.8966 15.4922 57.6348 15.0508 58.0645 14.168V9.16406C57.6427 8.28125 56.9122 7.83984 55.8731 7.83984C54.2403 7.83984 53.4239 9.16406 53.4239 11.8125ZM64.0406 11.543C64.0406 10.2852 64.2828 9.16406 64.7672 8.17969C65.2516 7.19531 65.9469 6.43359 66.8531 5.89453C67.7672 5.35547 68.8258 5.08594 70.0289 5.08594C71.7398 5.08594 73.1344 5.60938 74.2125 6.65625C75.2984 7.70312 75.9039 9.125 76.0289 10.9219L76.0523 11.7891C76.0523 13.7344 75.5094 15.2969 74.4234 16.4766C73.3375 17.6484 71.8805 18.2344 70.0523 18.2344C68.2242 18.2344 66.7633 17.6484 65.6695 16.4766C64.5836 15.3047 64.0406 13.7109 64.0406 11.6953V11.543ZM67.4273 11.7891C67.4273 12.9922 67.6539 13.9141 68.107 14.5547C68.5602 15.1875 69.2086 15.5039 70.0523 15.5039C70.8727 15.5039 71.5133 15.1914 71.9742 14.5664C72.4352 13.9336 72.6656 12.9258 72.6656 11.543C72.6656 10.3633 72.4352 9.44922 71.9742 8.80078C71.5133 8.15234 70.8648 7.82812 70.0289 7.82812C69.2008 7.82812 68.5602 8.15234 68.107 8.80078C67.6539 9.44141 67.4273 10.4375 67.4273 11.7891ZM83.8917 15.5039C84.5167 15.5039 85.0245 15.332 85.4152 14.9883C85.8058 14.6445 86.0089 14.1875 86.0245 13.6172H89.2003C89.1925 14.4766 88.9581 15.2656 88.4972 15.9844C88.0362 16.6953 87.4034 17.25 86.5987 17.6484C85.8019 18.0391 84.9191 18.2344 83.9503 18.2344C82.1378 18.2344 80.7081 17.6602 79.6612 16.5117C78.6144 15.3555 78.0909 13.7617 78.0909 11.7305V11.5078C78.0909 9.55469 78.6105 7.99609 79.6495 6.83203C80.6886 5.66797 82.1144 5.08594 83.9269 5.08594C85.5128 5.08594 86.7823 5.53906 87.7355 6.44531C88.6964 7.34375 89.1847 8.54297 89.2003 10.043H86.0245C86.0089 9.38672 85.8058 8.85547 85.4152 8.44922C85.0245 8.03516 84.5089 7.82812 83.8683 7.82812C83.0792 7.82812 82.4816 8.11719 82.0753 8.69531C81.6769 9.26562 81.4777 10.1953 81.4777 11.4844V11.8359C81.4777 13.1406 81.6769 14.0781 82.0753 14.6484C82.4737 15.2188 83.0792 15.5039 83.8917 15.5039ZM98.4811 14.4961C98.4811 14.082 98.2741 13.7578 97.86 13.5234C97.4538 13.2812 96.7975 13.0664 95.8913 12.8789C92.8756 12.2461 91.3678 10.9648 91.3678 9.03516C91.3678 7.91016 91.8327 6.97266 92.7623 6.22266C93.6998 5.46484 94.9225 5.08594 96.4303 5.08594C98.0397 5.08594 99.3248 5.46484 100.286 6.22266C101.255 6.98047 101.739 7.96484 101.739 9.17578H98.3522C98.3522 8.69141 98.1959 8.29297 97.8834 7.98047C97.5709 7.66016 97.0827 7.5 96.4186 7.5C95.8483 7.5 95.4069 7.62891 95.0944 7.88672C94.7819 8.14453 94.6256 8.47266 94.6256 8.87109C94.6256 9.24609 94.8014 9.55078 95.153 9.78516C95.5123 10.0117 96.1139 10.2109 96.9577 10.3828C97.8014 10.5469 98.5123 10.7344 99.0905 10.9453C100.88 11.6016 101.774 12.7383 101.774 14.3555C101.774 15.5117 101.278 16.4492 100.286 17.168C99.2936 17.8789 98.0123 18.2344 96.442 18.2344C95.3795 18.2344 94.4342 18.0469 93.6061 17.6719C92.7858 17.2891 92.1413 16.7695 91.6725 16.1133C91.2038 15.4492 90.9694 14.7344 90.9694 13.9688H94.1803C94.2116 14.5703 94.4342 15.0312 94.8483 15.3516C95.2623 15.6719 95.817 15.832 96.5123 15.832C97.1608 15.832 97.6491 15.7109 97.9772 15.4688C98.3131 15.2188 98.4811 14.8945 98.4811 14.4961Z"
                      fill="#EEEEEE"
                    />
                  </svg>
                </router-link>
              </div>

              <label
                for="menu-toggle"
                class="pointer-cursor lg:hidden block"
              >
              <svg
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0H20V2H0V0ZM0 6H20V8H0V6ZM0 12H20V14H0V12Z"
                    fill="#EEEEEE"
                  />
                </svg>
              </label>
              <input
                class="hidden"
                type="checkbox"
                id="menu-toggle"
              />

              <div
                class="hidden lg:flex lg:items-center lg:w-auto w-full"
                id="menu"
              >
                <nav>
                  <ul class="lg:flex items-center justify-between text-base text-white pt-4 lg:pt-0">
                    <li><a
                        class="lg:p-4 py-3 px-0 block hover:border-indigo-400"
                        href="#"
                      >サインイン</a></li>
                  </ul>
                </nav>
                <!-- <a
                  href="#"
                  class="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor"
                >
                  <img
                    class="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400"
                    src="https://pbs.twimg.com/profile_images/1128143121475342337/e8tkhRaz_normal.jpg"
                    alt="Andy Leverenz"
                  >
                </a> -->

              </div>

            </header>
          </div>
        </div>
      </div>

      <!-- /Top nav -->

      <div class="w-full max-w-screen-xl mx-auto px-6 pt-16 pb-16">
        <div class="xl:flex -mx-6">
          <!-- <div class="px-6 text-center xl:text-left max-w-2xl md:max-w-3xl mx-auto"> -->
          <div class="px-6 text-center max-w-2xl md:max-w-3xl mx-auto">
            <h1 class="text-3xl sm:text-4xl md:text-5xl xl:text-4xl font-light leading-tight">
              Archwayドキュメント
              <span class="block text-blue-600 font-normal">
                開発およびチュートリアル用のドキュメント。
              </span>
            </h1>
            <p class="mt-6 leading-relaxed sm:text-lg md:text-xl xl:text-lg text-gray-600">
              <!-- content here -->
            </p>
            <!-- <div class="flex mt-6 justify-center xl:justify-start"> -->
            <div class="flex mt-6 justify-center xl:justify-center">
              <router-link
                to="/jp/getting-started/"
                class="rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-blue-600 md:text-lg xl:text-base text-white font-semibold leading-tight shadow-md"
              >ドキュメンテーション</router-link>
            </div>
          </div>
          <!-- cover image here -->
          <!-- <div class="mt-12 xl:mt-0 px-6 flex-shrink-0 hidden md:block">
            <div
              class="p-2 overflow-hidden mx-auto"
              style="width: 640px; height: 448px;"
            >
            </div>
          </div> -->
        </div>
      </div>
    </div>

    <!-- <div
      class="bg-center bg-repeat-x -mb-8"
      style="height: 100px; margin-top: -100px; background-image: url(&quot;data:image/svg+xml,%3Csvg width='1440' height='100' viewBox='0 0 1440 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1440 100H0V45C0 45 202.817 0 360 0C517.183 0 720 45 720 45C720 45 922.817 90 1080 90C1237.18 90 1440 45 1440 45V100Z' fill='white'/%3E%3C/svg%3E%0A&quot;);"
    >
    </div> -->

    <!-- Main container -->
    <div class="w-full max-w-screen-xl mx-auto px-6">
      <div class="lg:flex -mx-6">

        <!-- Right content/TOC pane -->
        <div
          id="content-wrapper"
          class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible"
        >

          <!-- Content -->
          <div id="content" class="pt-12 pb-16 lg:pt-16">
            <!-- featute -->
            <div class="flex content-start flex-wrap">
              <div class="lg:w-1/3 w-full p-6 h-auto">
                <div class="rounded overflow-hidden shadow-lg border-2 border-blue-500 h-full">
                  <div class="px-6 py-4">
                    <router-link to="/technology/">
                      <div class="text-xl mb-2 text-gray-700">チュートリアルとガイド</div>
                    </router-link>
                    <p class="text-gray-500 text-base">
                      デモデイに使用され、アプリケーションに適用されるアーキテクチャと技術に関するすべての要約。
                    </p>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 w-full p-6 h-auto">
                <div class="rounded overflow-hidden shadow-lg border-2 border-blue-500 h-full">
                  <div class="px-6 py-4">
                    <router-link to="/process/">
                      <div class="text-xl mb-2 text-gray-700">コアコンセプト開発</div>
                    </router-link>
                    <p class="text-gray-500 text-base">
                      Archwayアーキテクチャとコード開発の詳細な概要。
                    </p>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 w-full p-6 h-auto">
                <div class="rounded overflow-hidden shadow-lg border-2 border-blue-500 h-full">
                  <div class="px-6 py-4">
                    <router-link to="/projects/sshpoc/">
                      <div class="text-xl mb-2 text-gray-700">プロジェクト</div>
                    </router-link>
                    <p class="text-gray-500 text-base">
                      会社の概要および詳細な実装プロジェクト。
                    </p>
                  </div>
                </div>
              </div>

            </div>
            <!-- / feature -->

            <!-- api -->
            <div class="flex content-start flex-wrap pt-10">
              <div class="lg:w-1/2 w-full p-6 h-auto">
                <div class="text-xl mb-2 text-gray-700 pb-5">
                  APIリファレンス
                </div>
                <div class="overflow-hidden border border-gray-200">
                  <div class="px-12 py-6">
                    <a href="https://sshpocapifunction.z7.web.core.windows.net/api/index.html" target="_blank">
                      <div class="text-xl mb-2 text-gray-700">REST APIドキュメント</div>
                    </a>
                    <p class="text-gray-500 text-base">
                      APIプロジェクトの完全なリファレンス。
                    </p>
                  </div>
                </div>
                <div class="overflow-hidden border border-gray-200">
                  <div class="px-12 py-6">
                    <router-link to="/process/">
                      <div class="text-xl mb-2 text-gray-700">道具</div>
                    </router-link>
                    <p class="text-gray-500 text-base">
                      アプリケーションの構築と管理を支援するユーティリティ。
                    </p>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/2 w-full p-6 h-auto">
                <div class="text-xl mb-2 text-gray-700 pb-5">ブログ</div>
                <div class="py-2">
                  <router-link to="">
                    <div class="text-xl mb-2 text-blue-500">一日の作り方 >></div>
                  </router-link>
                  <p class="text-gray-500 text-sm">
                    あなたの一日は...
                  </p>
                </div>
              </div>
            </div>
            <!-- / api -->
          </div>
          
          <!-- /Content -->
        </div>
        <!-- /Right content/TOC pane -->
      </div>
    </div>
    <!-- /Main container -->
  </div>
</template>

<script>
import TableOfContents from '../components/TableOfContents'
import SidebarNavigation from '../components/SidebarNavigation'

export default {
  components: {
    TableOfContents,
    SidebarNavigation
  }
}
</script>

<style src="../styles/app.css">
</style>
<style scoped>
#menu-toggle:checked + #menu {
  display: block;
}
</style>
